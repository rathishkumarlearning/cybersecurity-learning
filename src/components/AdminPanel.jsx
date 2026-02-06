import { useState, useEffect, useMemo } from 'react';
import {
  Shield, X, Lock, LayoutDashboard, FolderTree, Users, BarChart3,
  FileText, Map, ChevronRight, ChevronDown, Clock, BookOpen,
  AlertTriangle, Lightbulb, Code, CheckCircle2, XCircle, Download,
  Trash2, Copy, Eye, EyeOff, TrendingUp, Target, Award, Zap,
  FileCode, MessageSquare, Play, RotateCcw
} from 'lucide-react';

const ADMIN_PASSWORD = 'admin123';

// Helper function to analyze lesson content
const analyzeContent = (content) => {
  const wordCount = content.split(/\s+/).filter(w => w.length > 0).length;
  const codeBlocks = (content.match(/```[\s\S]*?```/g) || []).length;
  const tips = (content.match(/<tip>[\s\S]*?<\/tip>/g) || []).length;
  const warnings = (content.match(/<warning>[\s\S]*?<\/warning>/g) || []).length;
  const tables = (content.match(/\|.*\|.*\n\|[-\s|]+\|/g) || []).length;
  const headers = (content.match(/^##+ .+$/gm) || []).length;
  
  return { wordCount, codeBlocks, tips, warnings, tables, headers };
};

// Parse duration string to minutes
const parseDuration = (duration) => {
  const match = duration.match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
};

export default function AdminPanel({ courseData, isOpen, onClose }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [expandedChapters, setExpandedChapters] = useState({});
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showRawContent, setShowRawContent] = useState(false);
  const [completedLessons, setCompletedLessons] = useState([]);

  // Load completed lessons from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('cybersecurity-progress');
    if (saved) setCompletedLessons(JSON.parse(saved));
  }, [isOpen]);

  // Course statistics
  const stats = useMemo(() => {
    const chapters = courseData.chapters;
    const lessons = chapters.flatMap(ch => ch.lessons);
    const totalLessons = lessons.length;
    const totalDuration = lessons.reduce((acc, l) => acc + parseDuration(l.duration), 0);
    
    let totalWordCount = 0;
    let totalCodeBlocks = 0;
    let totalTips = 0;
    let totalWarnings = 0;
    let shortLessons = [];
    let noCodeLessons = [];
    let noTipLessons = [];
    
    const lessonStats = lessons.map(lesson => {
      const analysis = analyzeContent(lesson.content);
      totalWordCount += analysis.wordCount;
      totalCodeBlocks += analysis.codeBlocks;
      totalTips += analysis.tips;
      totalWarnings += analysis.warnings;
      
      if (analysis.wordCount < 200) shortLessons.push(lesson);
      if (analysis.codeBlocks === 0) noCodeLessons.push(lesson);
      if (analysis.tips === 0) noTipLessons.push(lesson);
      
      return { ...lesson, ...analysis };
    });

    const completionPercent = totalLessons > 0 
      ? Math.round((completedLessons.length / totalLessons) * 100) 
      : 0;

    const chapterProgress = chapters.map(ch => {
      const chapterLessons = ch.lessons.map(l => l.id);
      const completed = chapterLessons.filter(id => completedLessons.includes(id)).length;
      return {
        ...ch,
        completed,
        total: ch.lessons.length,
        percent: ch.lessons.length > 0 ? Math.round((completed / ch.lessons.length) * 100) : 0
      };
    });

    return {
      totalChapters: chapters.length,
      totalLessons,
      totalDuration,
      totalWordCount,
      totalCodeBlocks,
      totalTips,
      totalWarnings,
      avgWordCount: Math.round(totalWordCount / totalLessons),
      completedCount: completedLessons.length,
      completionPercent,
      shortLessons,
      noCodeLessons,
      noTipLessons,
      lessonStats,
      chapterProgress
    };
  }, [courseData, completedLessons]);

  // Get last accessed timestamp
  const lastAccessed = useMemo(() => {
    const saved = localStorage.getItem('cybersecurity-last-accessed');
    return saved ? new Date(parseInt(saved)).toLocaleString() : 'Never';
  }, [isOpen]);

  // Handle password submission
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password');
      setPassword('');
    }
  };

  // Toggle chapter expansion
  const toggleChapter = (chapterId) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  // Reset progress
  const handleResetProgress = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      localStorage.removeItem('cybersecurity-progress');
      localStorage.removeItem('cybersecurity-last-accessed');
      setCompletedLessons([]);
    }
  };

  // Export progress as JSON
  const handleExportProgress = () => {
    const data = {
      exportDate: new Date().toISOString(),
      completedLessons,
      lastAccessed,
      completionPercent: stats.completionPercent,
      chapterProgress: stats.chapterProgress.map(ch => ({
        id: ch.id,
        title: ch.title,
        completed: ch.completed,
        total: ch.total,
        percent: ch.percent
      }))
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cybersecurity-progress-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Copy content to clipboard
  const handleCopyContent = () => {
    if (selectedLesson) {
      navigator.clipboard.writeText(selectedLesson.content);
    }
  };

  // Render lesson content (simplified for preview)
  const renderPreviewContent = (content) => {
    const lines = content.trim().split('\n');
    const elements = [];
    let i = 0;
    let inCodeBlock = false;
    let codeContent = [];
    let codeLanguage = '';

    while (i < lines.length) {
      const line = lines[i];

      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLanguage = line.slice(3).trim() || 'text';
          codeContent = [];
        } else {
          elements.push(
            <div key={`code-${i}`} className="admin-code-block">
              <div className="admin-code-header">
                <span>{codeLanguage}</span>
              </div>
              <pre>{codeContent.join('\n')}</pre>
            </div>
          );
          inCodeBlock = false;
        }
        i++;
        continue;
      }

      if (inCodeBlock) { codeContent.push(line); i++; continue; }

      if (line.includes('<tip>')) {
        let tipContent = [];
        i++;
        while (i < lines.length && !lines[i].includes('</tip>')) { tipContent.push(lines[i]); i++; }
        elements.push(
          <div key={`tip-${i}`} className="admin-tip-box">
            <Lightbulb size={16} />
            <span>{tipContent.join(' ').replace('💡 ', '')}</span>
          </div>
        );
        i++;
        continue;
      }

      if (line.includes('<warning>')) {
        let warnContent = [];
        i++;
        while (i < lines.length && !lines[i].includes('</warning>')) { warnContent.push(lines[i]); i++; }
        elements.push(
          <div key={`warn-${i}`} className="admin-warning-box">
            <AlertTriangle size={16} />
            <span>{warnContent.join(' ').replace('⚠️ ', '')}</span>
          </div>
        );
        i++;
        continue;
      }

      if (line.startsWith('## ')) { elements.push(<h2 key={`h2-${i}`}>{line.slice(3)}</h2>); i++; continue; }
      if (line.startsWith('### ')) { elements.push(<h3 key={`h3-${i}`}>{line.slice(4)}</h3>); i++; continue; }

      if (line.trim()) {
        elements.push(
          <p key={`p-${i}`} dangerouslySetInnerHTML={{ __html: line
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/`(.*?)`/g, '<code>$1</code>')
          }} />
        );
      }
      i++;
    }
    return elements;
  };

  if (!isOpen) return null;

  // Password gate
  if (!isAuthenticated) {
    return (
      <div className="admin-overlay">
        <div className="admin-login-card">
          <div className="admin-login-header">
            <div className="admin-login-icon">
              <Lock size={32} />
            </div>
            <h2>Admin Access</h2>
            <p>Enter password to continue</p>
          </div>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="admin-password-input"
              autoFocus
            />
            {passwordError && (
              <div className="admin-password-error">
                <XCircle size={14} />
                {passwordError}
              </div>
            )}
            <button type="submit" className="admin-login-btn">
              <Shield size={18} />
              Access Admin Panel
            </button>
          </form>
          <button className="admin-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'content', label: 'Content', icon: FolderTree },
    { id: 'progress', label: 'Progress', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'editor', label: 'Preview', icon: FileText },
    { id: 'structure', label: 'Structure', icon: Map },
  ];

  return (
    <div className="admin-overlay">
      <div className="admin-container">
        {/* Header */}
        <div className="admin-header">
          <div className="admin-header-title">
            <Shield size={24} />
            <span>Admin Panel</span>
          </div>
          <button className="admin-close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="admin-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`admin-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon size={18} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="admin-content">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="admin-dashboard">
              <div className="admin-section-title">
                <LayoutDashboard size={20} />
                <span>Dashboard Overview</span>
              </div>

              {/* Stats Grid */}
              <div className="admin-stats-grid">
                <div className="admin-stat-card">
                  <div className="admin-stat-icon chapters">
                    <FolderTree size={24} />
                  </div>
                  <div className="admin-stat-info">
                    <span className="admin-stat-value">{stats.totalChapters}</span>
                    <span className="admin-stat-label">Chapters</span>
                  </div>
                </div>

                <div className="admin-stat-card">
                  <div className="admin-stat-icon lessons">
                    <BookOpen size={24} />
                  </div>
                  <div className="admin-stat-info">
                    <span className="admin-stat-value">{stats.totalLessons}</span>
                    <span className="admin-stat-label">Lessons</span>
                  </div>
                </div>

                <div className="admin-stat-card">
                  <div className="admin-stat-icon duration">
                    <Clock size={24} />
                  </div>
                  <div className="admin-stat-info">
                    <span className="admin-stat-value">{stats.totalDuration}</span>
                    <span className="admin-stat-label">Total Minutes</span>
                  </div>
                </div>

                <div className="admin-stat-card">
                  <div className="admin-stat-icon completion">
                    <Target size={24} />
                  </div>
                  <div className="admin-stat-info">
                    <span className="admin-stat-value">{stats.completionPercent}%</span>
                    <span className="admin-stat-label">Completed</span>
                  </div>
                </div>
              </div>

              {/* Progress Chart */}
              <div className="admin-progress-section">
                <h3>Course Completion</h3>
                <div className="admin-progress-bar-large">
                  <div 
                    className="admin-progress-fill-large" 
                    style={{ width: `${stats.completionPercent}%` }}
                  >
                    <span>{stats.completedCount}/{stats.totalLessons} lessons</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="admin-quick-stats">
                <div className="admin-quick-stat">
                  <FileCode size={18} />
                  <span>{stats.totalCodeBlocks} code blocks</span>
                </div>
                <div className="admin-quick-stat">
                  <Lightbulb size={18} />
                  <span>{stats.totalTips} tips</span>
                </div>
                <div className="admin-quick-stat">
                  <AlertTriangle size={18} />
                  <span>{stats.totalWarnings} warnings</span>
                </div>
                <div className="admin-quick-stat">
                  <MessageSquare size={18} />
                  <span>{stats.totalWordCount.toLocaleString()} words</span>
                </div>
              </div>

              {/* Last Accessed */}
              <div className="admin-last-accessed">
                <Clock size={16} />
                <span>Last accessed: {lastAccessed}</span>
              </div>
            </div>
          )}

          {/* Content Manager Tab */}
          {activeTab === 'content' && (
            <div className="admin-content-manager">
              <div className="admin-section-title">
                <FolderTree size={20} />
                <span>Content Manager</span>
              </div>

              <div className="admin-tree-container">
                {courseData.chapters.map(chapter => (
                  <div key={chapter.id} className="admin-tree-chapter">
                    <div 
                      className="admin-tree-chapter-header"
                      onClick={() => toggleChapter(chapter.id)}
                    >
                      {expandedChapters[chapter.id] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                      <FolderTree size={18} />
                      <span className="admin-tree-chapter-title">
                        Chapter {chapter.id}: {chapter.title}
                      </span>
                      <span className="admin-tree-lesson-count">
                        {chapter.lessons.length} lessons
                      </span>
                    </div>

                    {expandedChapters[chapter.id] && (
                      <div className="admin-tree-lessons">
                        {chapter.lessons.map(lesson => {
                          const analysis = analyzeContent(lesson.content);
                          const isShort = analysis.wordCount < 200;
                          const isCompleted = completedLessons.includes(lesson.id);
                          
                          return (
                            <div 
                              key={lesson.id}
                              className={`admin-tree-lesson ${isShort ? 'short' : ''} ${selectedLesson?.id === lesson.id ? 'selected' : ''}`}
                              onClick={() => setSelectedLesson(lesson)}
                            >
                              <div className="admin-tree-lesson-info">
                                {isCompleted ? (
                                  <CheckCircle2 size={16} className="completed" />
                                ) : (
                                  <BookOpen size={16} />
                                )}
                                <span className="admin-tree-lesson-title">{lesson.title}</span>
                              </div>
                              <div className="admin-tree-lesson-meta">
                                <span className="admin-tree-lesson-id">{lesson.id}</span>
                                <span className="admin-tree-lesson-duration">{lesson.duration}</span>
                                <span className={`admin-tree-lesson-words ${isShort ? 'warning' : ''}`}>
                                  {analysis.wordCount} words
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Content Quality Alerts */}
              {(stats.shortLessons.length > 0) && (
                <div className="admin-quality-alerts">
                  <h4>
                    <AlertTriangle size={16} />
                    Content Quality Alerts
                  </h4>
                  {stats.shortLessons.length > 0 && (
                    <div className="admin-alert-item warning">
                      <span>{stats.shortLessons.length} lessons have &lt;200 words</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Progress Tracker Tab */}
          {activeTab === 'progress' && (
            <div className="admin-progress-tracker">
              <div className="admin-section-title">
                <Users size={20} />
                <span>Student Progress Tracker</span>
              </div>

              {/* Overall Progress */}
              <div className="admin-overall-progress">
                <div className="admin-progress-circle">
                  <svg viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="rgba(239, 68, 68, 0.2)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="8"
                      strokeDasharray={`${stats.completionPercent * 2.83} 283`}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="admin-progress-circle-text">
                    <span className="percent">{stats.completionPercent}%</span>
                    <span className="label">Complete</span>
                  </div>
                </div>
              </div>

              {/* Chapter Progress Bars */}
              <div className="admin-chapter-progress">
                <h4>Progress by Chapter</h4>
                {stats.chapterProgress.map(chapter => (
                  <div key={chapter.id} className="admin-chapter-progress-item">
                    <div className="admin-chapter-progress-header">
                      <span className="chapter-name">Ch {chapter.id}: {chapter.title}</span>
                      <span className="chapter-stats">{chapter.completed}/{chapter.total}</span>
                    </div>
                    <div className="admin-chapter-progress-bar">
                      <div 
                        className="admin-chapter-progress-fill"
                        style={{ width: `${chapter.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Completed Lessons List */}
              <div className="admin-completed-lessons">
                <h4>Completed Lessons ({completedLessons.length})</h4>
                <div className="admin-completed-list">
                  {completedLessons.length === 0 ? (
                    <div className="admin-empty-state">No lessons completed yet</div>
                  ) : (
                    completedLessons.map(lessonId => {
                      const lesson = courseData.chapters
                        .flatMap(ch => ch.lessons)
                        .find(l => l.id === lessonId);
                      return lesson ? (
                        <div key={lessonId} className="admin-completed-item">
                          <CheckCircle2 size={14} />
                          <span>{lesson.title}</span>
                        </div>
                      ) : null;
                    })
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="admin-progress-actions">
                <button className="admin-action-btn export" onClick={handleExportProgress}>
                  <Download size={18} />
                  Export Progress
                </button>
                <button className="admin-action-btn reset" onClick={handleResetProgress}>
                  <Trash2 size={18} />
                  Reset Progress
                </button>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="admin-analytics">
              <div className="admin-section-title">
                <BarChart3 size={20} />
                <span>Course Analytics</span>
              </div>

              {/* Content Statistics */}
              <div className="admin-analytics-grid">
                <div className="admin-analytics-card">
                  <div className="admin-analytics-card-header">
                    <MessageSquare size={20} />
                    <span>Word Count</span>
                  </div>
                  <div className="admin-analytics-card-value">{stats.totalWordCount.toLocaleString()}</div>
                  <div className="admin-analytics-card-sub">Avg: {stats.avgWordCount} per lesson</div>
                </div>

                <div className="admin-analytics-card">
                  <div className="admin-analytics-card-header">
                    <Code size={20} />
                    <span>Code Blocks</span>
                  </div>
                  <div className="admin-analytics-card-value">{stats.totalCodeBlocks}</div>
                  <div className="admin-analytics-card-sub">Avg: {(stats.totalCodeBlocks / stats.totalLessons).toFixed(1)} per lesson</div>
                </div>

                <div className="admin-analytics-card">
                  <div className="admin-analytics-card-header">
                    <Lightbulb size={20} />
                    <span>Pro Tips</span>
                  </div>
                  <div className="admin-analytics-card-value">{stats.totalTips}</div>
                  <div className="admin-analytics-card-sub">{stats.noTipLessons.length} lessons without tips</div>
                </div>

                <div className="admin-analytics-card">
                  <div className="admin-analytics-card-header">
                    <AlertTriangle size={20} />
                    <span>Warnings</span>
                  </div>
                  <div className="admin-analytics-card-value">{stats.totalWarnings}</div>
                  <div className="admin-analytics-card-sub">Security & safety notes</div>
                </div>
              </div>

              {/* Content Quality Breakdown */}
              <div className="admin-quality-breakdown">
                <h4>Content Quality Indicators</h4>
                
                <div className="admin-quality-item">
                  <div className="admin-quality-label">
                    <span>Lessons with Code Examples</span>
                    <span>{stats.totalLessons - stats.noCodeLessons.length}/{stats.totalLessons}</span>
                  </div>
                  <div className="admin-quality-bar">
                    <div 
                      className="admin-quality-fill good"
                      style={{ width: `${((stats.totalLessons - stats.noCodeLessons.length) / stats.totalLessons) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="admin-quality-item">
                  <div className="admin-quality-label">
                    <span>Lessons with Pro Tips</span>
                    <span>{stats.totalLessons - stats.noTipLessons.length}/{stats.totalLessons}</span>
                  </div>
                  <div className="admin-quality-bar">
                    <div 
                      className="admin-quality-fill good"
                      style={{ width: `${((stats.totalLessons - stats.noTipLessons.length) / stats.totalLessons) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="admin-quality-item">
                  <div className="admin-quality-label">
                    <span>Lessons with &gt;200 Words</span>
                    <span>{stats.totalLessons - stats.shortLessons.length}/{stats.totalLessons}</span>
                  </div>
                  <div className="admin-quality-bar">
                    <div 
                      className="admin-quality-fill good"
                      style={{ width: `${((stats.totalLessons - stats.shortLessons.length) / stats.totalLessons) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Per-Lesson Stats Table */}
              <div className="admin-lesson-stats-table">
                <h4>Detailed Lesson Statistics</h4>
                <div className="admin-table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Lesson</th>
                        <th>Words</th>
                        <th>Code</th>
                        <th>Tips</th>
                        <th>Warn</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.lessonStats.map(lesson => (
                        <tr key={lesson.id} className={lesson.wordCount < 200 ? 'warning-row' : ''}>
                          <td>{lesson.title}</td>
                          <td>{lesson.wordCount}</td>
                          <td>{lesson.codeBlocks}</td>
                          <td>{lesson.tips}</td>
                          <td>{lesson.warnings}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Content Editor/Preview Tab */}
          {activeTab === 'editor' && (
            <div className="admin-editor">
              <div className="admin-section-title">
                <FileText size={20} />
                <span>Content Preview</span>
              </div>

              {/* Lesson Selector */}
              <div className="admin-lesson-selector">
                <select 
                  value={selectedLesson?.id || ''} 
                  onChange={(e) => {
                    const lesson = courseData.chapters
                      .flatMap(ch => ch.lessons)
                      .find(l => l.id === e.target.value);
                    setSelectedLesson(lesson);
                  }}
                >
                  <option value="">Select a lesson...</option>
                  {courseData.chapters.map(chapter => (
                    <optgroup key={chapter.id} label={`Chapter ${chapter.id}: ${chapter.title}`}>
                      {chapter.lessons.map(lesson => (
                        <option key={lesson.id} value={lesson.id}>
                          {lesson.title}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              {selectedLesson && (
                <>
                  {/* View Toggle */}
                  <div className="admin-view-toggle">
                    <button 
                      className={`toggle-btn ${!showRawContent ? 'active' : ''}`}
                      onClick={() => setShowRawContent(false)}
                    >
                      <Eye size={16} />
                      Rendered
                    </button>
                    <button 
                      className={`toggle-btn ${showRawContent ? 'active' : ''}`}
                      onClick={() => setShowRawContent(true)}
                    >
                      <Code size={16} />
                      Raw
                    </button>
                    <button className="copy-btn" onClick={handleCopyContent}>
                      <Copy size={16} />
                      Copy
                    </button>
                  </div>

                  {/* Lesson Metadata */}
                  <div className="admin-lesson-meta">
                    <span><strong>ID:</strong> {selectedLesson.id}</span>
                    <span><strong>Duration:</strong> {selectedLesson.duration}</span>
                    <span><strong>Words:</strong> {analyzeContent(selectedLesson.content).wordCount}</span>
                  </div>

                  {/* Content Preview */}
                  <div className="admin-preview-container">
                    {showRawContent ? (
                      <pre className="admin-raw-content">{selectedLesson.content}</pre>
                    ) : (
                      <div className="admin-rendered-content">
                        <h1>{selectedLesson.title}</h1>
                        {renderPreviewContent(selectedLesson.content)}
                      </div>
                    )}
                  </div>
                </>
              )}

              {!selectedLesson && (
                <div className="admin-empty-state">
                  <FileText size={48} />
                  <p>Select a lesson to preview its content</p>
                </div>
              )}
            </div>
          )}

          {/* Course Structure Visualizer Tab */}
          {activeTab === 'structure' && (
            <div className="admin-structure">
              <div className="admin-section-title">
                <Map size={20} />
                <span>Course Structure</span>
              </div>

              <div className="admin-structure-legend">
                <div className="legend-item">
                  <div className="legend-color completed"></div>
                  <span>Completed</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color incomplete"></div>
                  <span>Not Started</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color warning"></div>
                  <span>Short Content</span>
                </div>
              </div>

              <div className="admin-structure-map">
                {courseData.chapters.map((chapter, chapterIdx) => (
                  <div key={chapter.id} className="admin-structure-chapter">
                    <div className="admin-structure-chapter-node">
                      <div className="chapter-badge">{chapter.id}</div>
                      <div className="chapter-info">
                        <span className="chapter-title">{chapter.title}</span>
                        <span className="chapter-desc">{chapter.description}</span>
                      </div>
                    </div>
                    
                    <div className="admin-structure-lessons">
                      {chapter.lessons.map((lesson, lessonIdx) => {
                        const isCompleted = completedLessons.includes(lesson.id);
                        const isShort = analyzeContent(lesson.content).wordCount < 200;
                        
                        return (
                          <div 
                            key={lesson.id}
                            className={`admin-structure-lesson-node ${isCompleted ? 'completed' : ''} ${isShort ? 'warning' : ''}`}
                          >
                            <div className="lesson-connector">
                              <div className="connector-line"></div>
                              <div className="connector-dot"></div>
                            </div>
                            <div className="lesson-card">
                              <div className="lesson-status">
                                {isCompleted ? (
                                  <CheckCircle2 size={16} />
                                ) : (
                                  <div className="lesson-number">{lessonIdx + 1}</div>
                                )}
                              </div>
                              <div className="lesson-info">
                                <span className="lesson-title">{lesson.title}</span>
                                <span className="lesson-duration">{lesson.duration}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {chapterIdx < courseData.chapters.length - 1 && (
                      <div className="chapter-connector">
                        <ChevronDown size={24} />
                      </div>
                    )}
                  </div>
                ))}

                {/* Finish Node */}
                <div className="admin-structure-finish">
                  <Award size={32} />
                  <span>Course Complete!</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
