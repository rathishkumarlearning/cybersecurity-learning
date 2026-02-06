import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Shield, X, Lock, LayoutDashboard, FolderTree, Users, BarChart3,
  FileText, Map, ChevronRight, ChevronDown, Clock, BookOpen,
  AlertTriangle, Lightbulb, Code, CheckCircle2, XCircle, Download,
  Trash2, Copy, Eye, EyeOff, TrendingUp, Target, Award, Zap,
  FileCode, MessageSquare, Play, RotateCcw, Plus, Edit3, Save,
  Upload, ArrowUp, ArrowDown, Search, Filter, RefreshCw, Archive,
  Undo2, FileJson, FileDown, CheckSquare, Square, Settings
} from 'lucide-react';

const ADMIN_PASSWORD = 'admin123';
const STORAGE_KEY_OVERRIDES = 'cybersecurity-course-overrides';
const STORAGE_KEY_TRASH = 'cybersecurity-course-trash';
const STORAGE_KEY_PROGRESS = 'cybersecurity-progress';

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

// Generate unique ID
const generateId = (chapterId, lessonIndex) => {
  return `${chapterId}-${lessonIndex + 1}`;
};

// Toast Notification Component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast toast-${type}`}>
      {type === 'success' && <CheckCircle2 size={18} />}
      {type === 'error' && <XCircle size={18} />}
      {type === 'warning' && <AlertTriangle size={18} />}
      <span>{message}</span>
    </div>
  );
};

// Confirmation Modal Component
const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel, confirmText = 'Delete', isDangerous = true }) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <AlertTriangle size={24} className={isDangerous ? 'text-danger' : 'text-warning'} />
          <h3>{title}</h3>
        </div>
        <p className="modal-message">{message}</p>
        <div className="modal-actions">
          <button className="modal-btn cancel" onClick={onCancel}>Cancel</button>
          <button className={`modal-btn ${isDangerous ? 'danger' : 'confirm'}`} onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

// Create/Edit Form Modal
const FormModal = ({ isOpen, title, children, onClose, onSave, saveText = 'Save' }) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay">
      <div className="modal-content modal-form">
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose}><X size={20} /></button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-actions">
          <button className="modal-btn cancel" onClick={onClose}>Cancel</button>
          <button className="modal-btn save" onClick={onSave}>
            <Save size={16} />{saveText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function AdminPanel({ courseData: baseCourseData, isOpen, onClose }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [expandedChapters, setExpandedChapters] = useState({});
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showRawContent, setShowRawContent] = useState(false);
  const [completedLessons, setCompletedLessons] = useState([]);
  
  // CRUD State
  const [overrides, setOverrides] = useState({ chapters: [], deletedChapters: [], deletedLessons: {} });
  const [trash, setTrash] = useState({ chapters: [], lessons: [] });
  const [toasts, setToasts] = useState([]);
  
  // Modal State
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, title: '', message: '', onConfirm: null });
  const [editingChapter, setEditingChapter] = useState(null);
  const [editingLesson, setEditingLesson] = useState(null);
  const [isCreatingChapter, setIsCreatingChapter] = useState(false);
  const [isCreatingLesson, setIsCreatingLesson] = useState(null); // null or chapterId
  
  // Form State
  const [chapterForm, setChapterForm] = useState({ id: '', title: '', description: '' });
  const [lessonForm, setLessonForm] = useState({ id: '', title: '', duration: '', content: '', chapterId: '' });
  
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('order'); // order, words, duration
  const [showLivePreview, setShowLivePreview] = useState(false);
  
  // Bulk Selection State
  const [selectedLessons, setSelectedLessons] = useState(new Set());
  const [bulkMode, setBulkMode] = useState(false);

  // Add toast notification
  const addToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  // Load data from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY_PROGRESS);
    if (savedProgress) setCompletedLessons(JSON.parse(savedProgress));
    
    const savedOverrides = localStorage.getItem(STORAGE_KEY_OVERRIDES);
    if (savedOverrides) {
      try {
        setOverrides(JSON.parse(savedOverrides));
      } catch (e) {
        console.error('Failed to parse overrides:', e);
      }
    }
    
    const savedTrash = localStorage.getItem(STORAGE_KEY_TRASH);
    if (savedTrash) {
      try {
        setTrash(JSON.parse(savedTrash));
      } catch (e) {
        console.error('Failed to parse trash:', e);
      }
    }
  }, [isOpen]);

  // Save overrides to localStorage
  const saveOverrides = useCallback((newOverrides) => {
    setOverrides(newOverrides);
    localStorage.setItem(STORAGE_KEY_OVERRIDES, JSON.stringify(newOverrides));
  }, []);

  // Save trash to localStorage
  const saveTrash = useCallback((newTrash) => {
    setTrash(newTrash);
    localStorage.setItem(STORAGE_KEY_TRASH, JSON.stringify(newTrash));
  }, []);

  // Merge base course data with overrides
  const courseData = useMemo(() => {
    if (!baseCourseData) return { chapters: [] };
    
    // Start with base data
    let mergedChapters = [...baseCourseData.chapters];
    
    // Apply chapter overrides (modified chapters)
    if (overrides.chapters) {
      overrides.chapters.forEach(override => {
        const existingIndex = mergedChapters.findIndex(ch => ch.id === override.id);
        if (existingIndex >= 0) {
          // Update existing chapter
          mergedChapters[existingIndex] = {
            ...mergedChapters[existingIndex],
            ...override,
            lessons: override.lessons || mergedChapters[existingIndex].lessons,
            _modified: true
          };
        } else {
          // Add new chapter
          mergedChapters.push({ ...override, _new: true });
        }
      });
    }
    
    // Remove deleted chapters
    if (overrides.deletedChapters) {
      mergedChapters = mergedChapters.filter(ch => !overrides.deletedChapters.includes(ch.id));
    }
    
    // Remove deleted lessons from chapters
    if (overrides.deletedLessons) {
      mergedChapters = mergedChapters.map(ch => {
        const deletedFromChapter = overrides.deletedLessons[ch.id] || [];
        return {
          ...ch,
          lessons: ch.lessons.filter(l => !deletedFromChapter.includes(l.id))
        };
      });
    }
    
    // Sort chapters by id
    mergedChapters.sort((a, b) => a.id - b.id);
    
    return {
      ...baseCourseData,
      chapters: mergedChapters
    };
  }, [baseCourseData, overrides]);

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
      avgWordCount: totalLessons > 0 ? Math.round(totalWordCount / totalLessons) : 0,
      completedCount: completedLessons.length,
      completionPercent,
      shortLessons,
      noCodeLessons,
      noTipLessons,
      lessonStats,
      chapterProgress
    };
  }, [courseData, completedLessons]);

  // Filtered and sorted lessons
  const filteredLessons = useMemo(() => {
    let lessons = courseData.chapters.flatMap(ch => 
      ch.lessons.map(l => ({ ...l, chapterId: ch.id, chapterTitle: ch.title }))
    );
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      lessons = lessons.filter(l => 
        l.title.toLowerCase().includes(query) ||
        l.content.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'words':
        lessons.sort((a, b) => analyzeContent(b.content).wordCount - analyzeContent(a.content).wordCount);
        break;
      case 'duration':
        lessons.sort((a, b) => parseDuration(b.duration) - parseDuration(a.duration));
        break;
      default: // order
        lessons.sort((a, b) => {
          if (a.chapterId !== b.chapterId) return a.chapterId - b.chapterId;
          return a.id.localeCompare(b.id);
        });
    }
    
    return lessons;
  }, [courseData, searchQuery, sortBy]);

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

  // ============ CREATE OPERATIONS ============
  
  const handleCreateChapter = () => {
    const maxId = Math.max(...courseData.chapters.map(ch => ch.id), 0);
    setChapterForm({
      id: maxId + 1,
      title: '',
      description: ''
    });
    setIsCreatingChapter(true);
  };

  const handleSaveNewChapter = () => {
    if (!chapterForm.title.trim()) {
      addToast('Chapter title is required', 'error');
      return;
    }
    
    const newChapter = {
      id: parseInt(chapterForm.id),
      title: chapterForm.title.trim(),
      description: chapterForm.description.trim(),
      lessons: []
    };
    
    const newOverrides = {
      ...overrides,
      chapters: [...(overrides.chapters || []), newChapter]
    };
    
    saveOverrides(newOverrides);
    setIsCreatingChapter(false);
    setChapterForm({ id: '', title: '', description: '' });
    addToast(`Chapter "${newChapter.title}" created!`, 'success');
  };

  const handleCreateLesson = (chapterId) => {
    const chapter = courseData.chapters.find(ch => ch.id === chapterId);
    const lessonIndex = chapter ? chapter.lessons.length : 0;
    
    setLessonForm({
      id: generateId(chapterId, lessonIndex),
      title: '',
      duration: '5 min',
      content: `## Introduction\n\nYour lesson content here...\n\n### Section 1\n\nContent...\n\n<tip>\n💡 Add helpful tips here!\n</tip>\n`,
      chapterId: chapterId
    });
    setIsCreatingLesson(chapterId);
  };

  const handleSaveNewLesson = () => {
    if (!lessonForm.title.trim()) {
      addToast('Lesson title is required', 'error');
      return;
    }
    
    const newLesson = {
      id: lessonForm.id,
      title: lessonForm.title.trim(),
      duration: lessonForm.duration.trim() || '5 min',
      content: lessonForm.content
    };
    
    // Find or create the chapter override
    const chapterId = parseInt(lessonForm.chapterId);
    const existingChapterOverride = overrides.chapters?.find(ch => ch.id === chapterId);
    const baseChapter = baseCourseData.chapters.find(ch => ch.id === chapterId);
    
    let updatedChapters;
    
    if (existingChapterOverride) {
      // Update existing override
      updatedChapters = overrides.chapters.map(ch => {
        if (ch.id === chapterId) {
          return {
            ...ch,
            lessons: [...(ch.lessons || baseChapter?.lessons || []), newLesson]
          };
        }
        return ch;
      });
    } else if (baseChapter) {
      // Create new override from base
      updatedChapters = [
        ...(overrides.chapters || []),
        {
          ...baseChapter,
          lessons: [...baseChapter.lessons, newLesson]
        }
      ];
    } else {
      addToast('Chapter not found', 'error');
      return;
    }
    
    const newOverrides = {
      ...overrides,
      chapters: updatedChapters
    };
    
    saveOverrides(newOverrides);
    setIsCreatingLesson(null);
    setLessonForm({ id: '', title: '', duration: '', content: '', chapterId: '' });
    addToast(`Lesson "${newLesson.title}" created!`, 'success');
  };

  // ============ UPDATE OPERATIONS ============

  const handleEditChapter = (chapter) => {
    setChapterForm({
      id: chapter.id,
      title: chapter.title,
      description: chapter.description || ''
    });
    setEditingChapter(chapter);
  };

  const handleSaveChapterEdit = () => {
    const chapterId = editingChapter.id;
    const existingOverride = overrides.chapters?.find(ch => ch.id === chapterId);
    const baseChapter = baseCourseData.chapters.find(ch => ch.id === chapterId);
    
    let updatedChapters;
    
    if (existingOverride) {
      updatedChapters = overrides.chapters.map(ch => {
        if (ch.id === chapterId) {
          return {
            ...ch,
            title: chapterForm.title.trim(),
            description: chapterForm.description.trim()
          };
        }
        return ch;
      });
    } else {
      updatedChapters = [
        ...(overrides.chapters || []),
        {
          ...(baseChapter || {}),
          id: chapterId,
          title: chapterForm.title.trim(),
          description: chapterForm.description.trim(),
          lessons: baseChapter?.lessons || []
        }
      ];
    }
    
    const newOverrides = { ...overrides, chapters: updatedChapters };
    saveOverrides(newOverrides);
    setEditingChapter(null);
    setChapterForm({ id: '', title: '', description: '' });
    addToast('Chapter updated!', 'success');
  };

  const handleEditLesson = (lesson, chapterId) => {
    setLessonForm({
      id: lesson.id,
      title: lesson.title,
      duration: lesson.duration,
      content: lesson.content,
      chapterId: chapterId
    });
    setEditingLesson({ ...lesson, chapterId });
    setActiveTab('editor');
    setShowLivePreview(true);
  };

  const handleSaveLessonEdit = () => {
    const chapterId = parseInt(editingLesson.chapterId);
    const existingChapterOverride = overrides.chapters?.find(ch => ch.id === chapterId);
    const baseChapter = baseCourseData.chapters.find(ch => ch.id === chapterId);
    
    const updatedLesson = {
      id: lessonForm.id,
      title: lessonForm.title.trim(),
      duration: lessonForm.duration.trim(),
      content: lessonForm.content,
      _modified: true
    };
    
    let updatedChapters;
    
    if (existingChapterOverride) {
      updatedChapters = overrides.chapters.map(ch => {
        if (ch.id === chapterId) {
          const lessons = ch.lessons || baseChapter?.lessons || [];
          const lessonIndex = lessons.findIndex(l => l.id === updatedLesson.id);
          
          let newLessons;
          if (lessonIndex >= 0) {
            newLessons = lessons.map(l => l.id === updatedLesson.id ? updatedLesson : l);
          } else {
            newLessons = lessons.map(l => l.id === updatedLesson.id ? updatedLesson : l);
            // Check if lesson exists in base but not override
            const baseLesson = baseChapter?.lessons.find(l => l.id === updatedLesson.id);
            if (baseLesson) {
              newLessons = baseChapter.lessons.map(l => l.id === updatedLesson.id ? updatedLesson : l);
            }
          }
          
          return { ...ch, lessons: newLessons };
        }
        return ch;
      });
    } else {
      const baseLessons = baseChapter?.lessons || [];
      const newLessons = baseLessons.map(l => l.id === updatedLesson.id ? updatedLesson : l);
      
      updatedChapters = [
        ...(overrides.chapters || []),
        {
          ...baseChapter,
          lessons: newLessons
        }
      ];
    }
    
    const newOverrides = { ...overrides, chapters: updatedChapters };
    saveOverrides(newOverrides);
    setEditingLesson(null);
    setLessonForm({ id: '', title: '', duration: '', content: '', chapterId: '' });
    addToast('Lesson saved!', 'success');
  };

  const handleMoveChapter = (chapterId, direction) => {
    const chapters = [...courseData.chapters];
    const index = chapters.findIndex(ch => ch.id === chapterId);
    
    if (direction === 'up' && index > 0) {
      // Swap IDs
      const tempId = chapters[index].id;
      chapters[index].id = chapters[index - 1].id;
      chapters[index - 1].id = tempId;
    } else if (direction === 'down' && index < chapters.length - 1) {
      const tempId = chapters[index].id;
      chapters[index].id = chapters[index + 1].id;
      chapters[index + 1].id = tempId;
    }
    
    // Update overrides with new chapter order
    const newOverrides = {
      ...overrides,
      chapters: chapters.map(ch => ({
        ...ch,
        lessons: ch.lessons
      }))
    };
    
    saveOverrides(newOverrides);
    addToast('Chapter reordered!', 'success');
  };

  const handleMoveLesson = (lessonId, chapterId, direction) => {
    const chapter = courseData.chapters.find(ch => ch.id === chapterId);
    if (!chapter) return;
    
    const lessons = [...chapter.lessons];
    const index = lessons.findIndex(l => l.id === lessonId);
    
    if (direction === 'up' && index > 0) {
      [lessons[index], lessons[index - 1]] = [lessons[index - 1], lessons[index]];
    } else if (direction === 'down' && index < lessons.length - 1) {
      [lessons[index], lessons[index + 1]] = [lessons[index + 1], lessons[index]];
    }
    
    // Regenerate IDs
    const reorderedLessons = lessons.map((l, i) => ({
      ...l,
      id: generateId(chapterId, i)
    }));
    
    // Update chapter override
    const existingOverride = overrides.chapters?.find(ch => ch.id === chapterId);
    let updatedChapters;
    
    if (existingOverride) {
      updatedChapters = overrides.chapters.map(ch => 
        ch.id === chapterId ? { ...ch, lessons: reorderedLessons } : ch
      );
    } else {
      updatedChapters = [
        ...(overrides.chapters || []),
        { ...chapter, lessons: reorderedLessons }
      ];
    }
    
    const newOverrides = { ...overrides, chapters: updatedChapters };
    saveOverrides(newOverrides);
    addToast('Lesson reordered!', 'success');
  };

  // ============ DELETE OPERATIONS ============

  const handleDeleteChapter = (chapter) => {
    setConfirmModal({
      isOpen: true,
      title: 'Delete Chapter?',
      message: `Are you sure you want to delete "${chapter.title}"? This will also delete ${chapter.lessons.length} lessons. This action moves items to trash.`,
      onConfirm: () => {
        // Move to trash
        const newTrash = {
          ...trash,
          chapters: [...trash.chapters, { ...chapter, deletedAt: new Date().toISOString() }]
        };
        saveTrash(newTrash);
        
        // Add to deleted chapters
        const newOverrides = {
          ...overrides,
          deletedChapters: [...(overrides.deletedChapters || []), chapter.id]
        };
        saveOverrides(newOverrides);
        
        setConfirmModal({ isOpen: false });
        addToast(`Chapter "${chapter.title}" moved to trash`, 'success');
      }
    });
  };

  const handleDeleteLesson = (lesson, chapterId) => {
    setConfirmModal({
      isOpen: true,
      title: 'Delete Lesson?',
      message: `Are you sure you want to delete "${lesson.title}"? This action moves the lesson to trash.`,
      onConfirm: () => {
        // Move to trash
        const newTrash = {
          ...trash,
          lessons: [...trash.lessons, { ...lesson, chapterId, deletedAt: new Date().toISOString() }]
        };
        saveTrash(newTrash);
        
        // Add to deleted lessons
        const deletedLessons = { ...overrides.deletedLessons };
        if (!deletedLessons[chapterId]) deletedLessons[chapterId] = [];
        deletedLessons[chapterId].push(lesson.id);
        
        const newOverrides = { ...overrides, deletedLessons };
        saveOverrides(newOverrides);
        
        setConfirmModal({ isOpen: false });
        setSelectedLesson(null);
        addToast(`Lesson "${lesson.title}" moved to trash`, 'success');
      }
    });
  };

  const handleRestoreChapter = (chapter) => {
    // Remove from trash
    const newTrash = {
      ...trash,
      chapters: trash.chapters.filter(ch => ch.id !== chapter.id)
    };
    saveTrash(newTrash);
    
    // Remove from deleted chapters
    const newOverrides = {
      ...overrides,
      deletedChapters: (overrides.deletedChapters || []).filter(id => id !== chapter.id)
    };
    saveOverrides(newOverrides);
    
    addToast(`Chapter "${chapter.title}" restored!`, 'success');
  };

  const handleRestoreLesson = (lesson) => {
    // Remove from trash
    const newTrash = {
      ...trash,
      lessons: trash.lessons.filter(l => l.id !== lesson.id)
    };
    saveTrash(newTrash);
    
    // Remove from deleted lessons
    const deletedLessons = { ...overrides.deletedLessons };
    if (deletedLessons[lesson.chapterId]) {
      deletedLessons[lesson.chapterId] = deletedLessons[lesson.chapterId].filter(id => id !== lesson.id);
    }
    
    const newOverrides = { ...overrides, deletedLessons };
    saveOverrides(newOverrides);
    
    addToast(`Lesson "${lesson.title}" restored!`, 'success');
  };

  const handleEmptyTrash = () => {
    setConfirmModal({
      isOpen: true,
      title: 'Empty Trash?',
      message: 'This will permanently delete all items in the trash. This action cannot be undone!',
      onConfirm: () => {
        saveTrash({ chapters: [], lessons: [] });
        setConfirmModal({ isOpen: false });
        addToast('Trash emptied', 'success');
      }
    });
  };

  // ============ BULK OPERATIONS ============

  const handleToggleLessonSelect = (lessonId) => {
    setSelectedLessons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(lessonId)) {
        newSet.delete(lessonId);
      } else {
        newSet.add(lessonId);
      }
      return newSet;
    });
  };

  const handleSelectAll = () => {
    const allLessonIds = courseData.chapters.flatMap(ch => ch.lessons.map(l => l.id));
    setSelectedLessons(new Set(allLessonIds));
  };

  const handleDeselectAll = () => {
    setSelectedLessons(new Set());
  };

  const handleBulkMarkComplete = () => {
    const newCompleted = [...new Set([...completedLessons, ...selectedLessons])];
    setCompletedLessons(newCompleted);
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(newCompleted));
    addToast(`${selectedLessons.size} lessons marked as complete`, 'success');
    setSelectedLessons(new Set());
    setBulkMode(false);
  };

  const handleBulkMarkIncomplete = () => {
    const newCompleted = completedLessons.filter(id => !selectedLessons.has(id));
    setCompletedLessons(newCompleted);
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(newCompleted));
    addToast(`${selectedLessons.size} lessons marked as incomplete`, 'success');
    setSelectedLessons(new Set());
    setBulkMode(false);
  };

  const handleBulkDelete = () => {
    setConfirmModal({
      isOpen: true,
      title: 'Delete Selected Lessons?',
      message: `Are you sure you want to delete ${selectedLessons.size} lessons? They will be moved to trash.`,
      onConfirm: () => {
        const lessonsToDelete = courseData.chapters.flatMap(ch => 
          ch.lessons.filter(l => selectedLessons.has(l.id)).map(l => ({ ...l, chapterId: ch.id }))
        );
        
        // Add to trash
        const newTrash = {
          ...trash,
          lessons: [...trash.lessons, ...lessonsToDelete.map(l => ({ ...l, deletedAt: new Date().toISOString() }))]
        };
        saveTrash(newTrash);
        
        // Add to deleted lessons
        const deletedLessons = { ...overrides.deletedLessons };
        lessonsToDelete.forEach(l => {
          if (!deletedLessons[l.chapterId]) deletedLessons[l.chapterId] = [];
          deletedLessons[l.chapterId].push(l.id);
        });
        
        const newOverrides = { ...overrides, deletedLessons };
        saveOverrides(newOverrides);
        
        setConfirmModal({ isOpen: false });
        setSelectedLessons(new Set());
        setBulkMode(false);
        addToast(`${lessonsToDelete.length} lessons moved to trash`, 'success');
      }
    });
  };

  // ============ IMPORT/EXPORT OPERATIONS ============

  const handleExportCourse = () => {
    const exportData = {
      exportDate: new Date().toISOString(),
      version: '1.0',
      courseData: courseData,
      overrides: overrides,
      progress: completedLessons
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cybersecurity-course-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    addToast('Course exported!', 'success');
  };

  const handleImportCourse = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        
        if (imported.overrides) {
          saveOverrides(imported.overrides);
        }
        
        if (imported.progress) {
          setCompletedLessons(imported.progress);
          localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(imported.progress));
        }
        
        addToast('Course imported successfully!', 'success');
      } catch (err) {
        addToast('Failed to import: Invalid JSON file', 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input
  };

  const handleExportMarkdown = () => {
    let markdown = `# ${courseData.title || 'Cybersecurity Course'}\n\n`;
    markdown += `${courseData.subtitle || ''}\n\n---\n\n`;
    
    courseData.chapters.forEach(chapter => {
      markdown += `# Chapter ${chapter.id}: ${chapter.title}\n\n`;
      markdown += `*${chapter.description}*\n\n`;
      
      chapter.lessons.forEach(lesson => {
        markdown += `## ${lesson.title}\n\n`;
        markdown += `**Duration:** ${lesson.duration}\n\n`;
        markdown += lesson.content + '\n\n';
        markdown += '---\n\n';
      });
    });
    
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cybersecurity-course-${new Date().toISOString().split('T')[0]}.md`;
    a.click();
    URL.revokeObjectURL(url);
    addToast('Exported as Markdown!', 'success');
  };

  const handleResetToDefault = () => {
    setConfirmModal({
      isOpen: true,
      title: 'Reset to Default?',
      message: 'This will clear all your modifications and revert to the original course content. Progress will be preserved. This cannot be undone!',
      onConfirm: () => {
        localStorage.removeItem(STORAGE_KEY_OVERRIDES);
        localStorage.removeItem(STORAGE_KEY_TRASH);
        setOverrides({ chapters: [], deletedChapters: [], deletedLessons: {} });
        setTrash({ chapters: [], lessons: [] });
        setConfirmModal({ isOpen: false });
        addToast('Course reset to default', 'success');
      }
    });
  };

  // Reset progress
  const handleResetProgress = () => {
    setConfirmModal({
      isOpen: true,
      title: 'Reset Progress?',
      message: 'Are you sure you want to reset all progress? This cannot be undone.',
      onConfirm: () => {
        localStorage.removeItem(STORAGE_KEY_PROGRESS);
        localStorage.removeItem('cybersecurity-last-accessed');
        setCompletedLessons([]);
        setConfirmModal({ isOpen: false });
        addToast('Progress reset', 'success');
      }
    });
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
    addToast('Progress exported!', 'success');
  };

  // Copy content to clipboard
  const handleCopyContent = () => {
    if (editingLesson) {
      navigator.clipboard.writeText(lessonForm.content);
      addToast('Content copied!', 'success');
    } else if (selectedLesson) {
      navigator.clipboard.writeText(selectedLesson.content);
      addToast('Content copied!', 'success');
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
    { id: 'manage', label: 'Manage', icon: Settings },
    { id: 'content', label: 'Content', icon: FolderTree },
    { id: 'progress', label: 'Progress', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'editor', label: 'Editor', icon: Edit3 },
    { id: 'trash', label: 'Trash', icon: Trash2, badge: trash.chapters.length + trash.lessons.length },
  ];

  return (
    <div className="admin-overlay">
      {/* Toast Notifications */}
      <div className="toast-container">
        {toasts.map(toast => (
          <Toast 
            key={toast.id} 
            message={toast.message} 
            type={toast.type} 
            onClose={() => removeToast(toast.id)} 
          />
        ))}
      </div>

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title={confirmModal.title}
        message={confirmModal.message}
        onConfirm={confirmModal.onConfirm}
        onCancel={() => setConfirmModal({ isOpen: false })}
      />

      {/* Create Chapter Modal */}
      <FormModal
        isOpen={isCreatingChapter}
        title="Create New Chapter"
        onClose={() => setIsCreatingChapter(false)}
        onSave={handleSaveNewChapter}
        saveText="Create Chapter"
      >
        <div className="form-group">
          <label>Chapter Number</label>
          <input
            type="number"
            value={chapterForm.id}
            onChange={(e) => setChapterForm({ ...chapterForm, id: e.target.value })}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Title *</label>
          <input
            type="text"
            value={chapterForm.title}
            onChange={(e) => setChapterForm({ ...chapterForm, title: e.target.value })}
            placeholder="Chapter title..."
            className="form-input"
            autoFocus
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={chapterForm.description}
            onChange={(e) => setChapterForm({ ...chapterForm, description: e.target.value })}
            placeholder="Brief description..."
            className="form-textarea"
            rows={3}
          />
        </div>
      </FormModal>

      {/* Edit Chapter Modal */}
      <FormModal
        isOpen={!!editingChapter}
        title="Edit Chapter"
        onClose={() => setEditingChapter(null)}
        onSave={handleSaveChapterEdit}
      >
        <div className="form-group">
          <label>Title *</label>
          <input
            type="text"
            value={chapterForm.title}
            onChange={(e) => setChapterForm({ ...chapterForm, title: e.target.value })}
            className="form-input"
            autoFocus
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={chapterForm.description}
            onChange={(e) => setChapterForm({ ...chapterForm, description: e.target.value })}
            className="form-textarea"
            rows={3}
          />
        </div>
      </FormModal>

      {/* Create Lesson Modal */}
      <FormModal
        isOpen={!!isCreatingLesson}
        title="Create New Lesson"
        onClose={() => setIsCreatingLesson(null)}
        onSave={handleSaveNewLesson}
        saveText="Create Lesson"
      >
        <div className="form-row">
          <div className="form-group">
            <label>Lesson ID</label>
            <input
              type="text"
              value={lessonForm.id}
              onChange={(e) => setLessonForm({ ...lessonForm, id: e.target.value })}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Duration</label>
            <input
              type="text"
              value={lessonForm.duration}
              onChange={(e) => setLessonForm({ ...lessonForm, duration: e.target.value })}
              placeholder="e.g., 10 min"
              className="form-input"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Title *</label>
          <input
            type="text"
            value={lessonForm.title}
            onChange={(e) => setLessonForm({ ...lessonForm, title: e.target.value })}
            placeholder="Lesson title..."
            className="form-input"
            autoFocus
          />
        </div>
        <div className="form-group">
          <label>Content (Markdown)</label>
          <textarea
            value={lessonForm.content}
            onChange={(e) => setLessonForm({ ...lessonForm, content: e.target.value })}
            placeholder="Lesson content in markdown..."
            className="form-textarea form-textarea-code"
            rows={10}
          />
        </div>
      </FormModal>

      <div className="admin-container">
        {/* Header */}
        <div className="admin-header">
          <div className="admin-header-title">
            <Shield size={24} />
            <span>Admin Panel</span>
            {(overrides.chapters?.length > 0 || Object.keys(overrides.deletedLessons || {}).length > 0) && (
              <span className="badge badge-modified">Modified</span>
            )}
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
              {tab.badge > 0 && <span className="tab-badge">{tab.badge}</span>}
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

          {/* Manage Tab (CRUD Hub) */}
          {activeTab === 'manage' && (
            <div className="admin-manage">
              <div className="admin-section-title">
                <Settings size={20} />
                <span>Content Management</span>
              </div>

              {/* Action Buttons */}
              <div className="admin-action-grid">
                <button className="admin-crud-btn create" onClick={handleCreateChapter}>
                  <Plus size={20} />
                  <span>Add Chapter</span>
                </button>
                <button className="admin-crud-btn import" onClick={() => document.getElementById('import-input').click()}>
                  <Upload size={20} />
                  <span>Import Course</span>
                </button>
                <input
                  id="import-input"
                  type="file"
                  accept=".json"
                  onChange={handleImportCourse}
                  style={{ display: 'none' }}
                />
                <button className="admin-crud-btn export" onClick={handleExportCourse}>
                  <Download size={20} />
                  <span>Export Course</span>
                </button>
                <button className="admin-crud-btn markdown" onClick={handleExportMarkdown}>
                  <FileDown size={20} />
                  <span>Export Markdown</span>
                </button>
                <button className="admin-crud-btn reset" onClick={handleResetToDefault}>
                  <RefreshCw size={20} />
                  <span>Reset to Default</span>
                </button>
                <button 
                  className={`admin-crud-btn bulk ${bulkMode ? 'active' : ''}`} 
                  onClick={() => setBulkMode(!bulkMode)}
                >
                  <CheckSquare size={20} />
                  <span>Bulk Mode</span>
                </button>
              </div>

              {/* Bulk Actions */}
              {bulkMode && selectedLessons.size > 0 && (
                <div className="bulk-actions-bar">
                  <span>{selectedLessons.size} selected</span>
                  <button className="bulk-btn" onClick={handleSelectAll}>Select All</button>
                  <button className="bulk-btn" onClick={handleDeselectAll}>Deselect All</button>
                  <button className="bulk-btn complete" onClick={handleBulkMarkComplete}>
                    <CheckCircle2 size={16} /> Mark Complete
                  </button>
                  <button className="bulk-btn incomplete" onClick={handleBulkMarkIncomplete}>
                    <XCircle size={16} /> Mark Incomplete
                  </button>
                  <button className="bulk-btn delete" onClick={handleBulkDelete}>
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              )}

              {/* Search & Filter */}
              <div className="admin-search-bar">
                <div className="search-input-wrapper">
                  <Search size={18} />
                  <input
                    type="text"
                    placeholder="Search lessons..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                </div>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="order">Sort: Chapter Order</option>
                  <option value="words">Sort: Word Count</option>
                  <option value="duration">Sort: Duration</option>
                </select>
              </div>

              {/* Chapter & Lesson Management */}
              <div className="admin-chapters-list">
                {courseData.chapters.map((chapter, chapterIndex) => (
                  <div key={chapter.id} className={`admin-chapter-item ${chapter._modified ? 'modified' : ''} ${chapter._new ? 'new' : ''}`}>
                    <div className="admin-chapter-header">
                      <div className="admin-chapter-info" onClick={() => toggleChapter(chapter.id)}>
                        {expandedChapters[chapter.id] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                        <div className="admin-chapter-badge">{chapter.id}</div>
                        <div className="admin-chapter-text">
                          <span className="admin-chapter-title">
                            {chapter.title}
                            {chapter._modified && <span className="badge-inline modified">Modified</span>}
                            {chapter._new && <span className="badge-inline new">New</span>}
                          </span>
                          <span className="admin-chapter-desc">{chapter.description}</span>
                        </div>
                      </div>
                      <div className="admin-chapter-actions">
                        <button 
                          className="icon-btn" 
                          onClick={() => handleMoveChapter(chapter.id, 'up')}
                          disabled={chapterIndex === 0}
                          title="Move Up"
                        >
                          <ArrowUp size={16} />
                        </button>
                        <button 
                          className="icon-btn" 
                          onClick={() => handleMoveChapter(chapter.id, 'down')}
                          disabled={chapterIndex === courseData.chapters.length - 1}
                          title="Move Down"
                        >
                          <ArrowDown size={16} />
                        </button>
                        <button className="icon-btn edit" onClick={() => handleEditChapter(chapter)} title="Edit">
                          <Edit3 size={16} />
                        </button>
                        <button className="icon-btn add" onClick={() => handleCreateLesson(chapter.id)} title="Add Lesson">
                          <Plus size={16} />
                        </button>
                        <button className="icon-btn delete" onClick={() => handleDeleteChapter(chapter)} title="Delete">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    {expandedChapters[chapter.id] && (
                      <div className="admin-lessons-list">
                        {chapter.lessons.map((lesson, lessonIndex) => {
                          const isCompleted = completedLessons.includes(lesson.id);
                          const analysis = analyzeContent(lesson.content);
                          const isSelected = selectedLessons.has(lesson.id);
                          
                          return (
                            <div 
                              key={lesson.id} 
                              className={`admin-lesson-item ${lesson._modified ? 'modified' : ''} ${isSelected ? 'selected' : ''}`}
                            >
                              {bulkMode && (
                                <button 
                                  className="bulk-checkbox"
                                  onClick={() => handleToggleLessonSelect(lesson.id)}
                                >
                                  {isSelected ? <CheckSquare size={18} /> : <Square size={18} />}
                                </button>
                              )}
                              <div className="admin-lesson-info" onClick={() => setSelectedLesson(lesson)}>
                                {isCompleted ? (
                                  <CheckCircle2 size={16} className="icon-complete" />
                                ) : (
                                  <BookOpen size={16} />
                                )}
                                <span className="admin-lesson-title">
                                  {lesson.title}
                                  {lesson._modified && <span className="badge-inline modified">Modified</span>}
                                </span>
                              </div>
                              <div className="admin-lesson-meta">
                                <span className="meta-id">{lesson.id}</span>
                                <span className="meta-duration">{lesson.duration}</span>
                                <span className={`meta-words ${analysis.wordCount < 200 ? 'warning' : ''}`}>
                                  {analysis.wordCount}w
                                </span>
                              </div>
                              <div className="admin-lesson-actions">
                                <button 
                                  className="icon-btn" 
                                  onClick={() => handleMoveLesson(lesson.id, chapter.id, 'up')}
                                  disabled={lessonIndex === 0}
                                  title="Move Up"
                                >
                                  <ArrowUp size={14} />
                                </button>
                                <button 
                                  className="icon-btn" 
                                  onClick={() => handleMoveLesson(lesson.id, chapter.id, 'down')}
                                  disabled={lessonIndex === chapter.lessons.length - 1}
                                  title="Move Down"
                                >
                                  <ArrowDown size={14} />
                                </button>
                                <button 
                                  className="icon-btn edit" 
                                  onClick={() => handleEditLesson(lesson, chapter.id)}
                                  title="Edit"
                                >
                                  <Edit3 size={14} />
                                </button>
                                <button 
                                  className="icon-btn delete" 
                                  onClick={() => handleDeleteLesson(lesson, chapter.id)}
                                  title="Delete"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                        {chapter.lessons.length === 0 && (
                          <div className="admin-empty-lessons">
                            No lessons yet. <button onClick={() => handleCreateLesson(chapter.id)}>Add one</button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content Manager Tab */}
          {activeTab === 'content' && (
            <div className="admin-content-manager">
              <div className="admin-section-title">
                <FolderTree size={20} />
                <span>Content Browser</span>
              </div>

              {/* Search Bar */}
              <div className="admin-search-bar">
                <div className="search-input-wrapper">
                  <Search size={18} />
                  <input
                    type="text"
                    placeholder="Search lessons..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                </div>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="order">Sort: Chapter Order</option>
                  <option value="words">Sort: Word Count</option>
                  <option value="duration">Sort: Duration</option>
                </select>
              </div>

              <div className="admin-content-split">
                {/* Lesson List */}
                <div className="admin-lesson-list-panel">
                  {filteredLessons.map(lesson => {
                    const analysis = analyzeContent(lesson.content);
                    const isCompleted = completedLessons.includes(lesson.id);
                    
                    return (
                      <div 
                        key={lesson.id}
                        className={`admin-content-item ${selectedLesson?.id === lesson.id ? 'selected' : ''}`}
                        onClick={() => setSelectedLesson(lesson)}
                      >
                        <div className="admin-content-item-header">
                          {isCompleted ? (
                            <CheckCircle2 size={16} className="icon-complete" />
                          ) : (
                            <BookOpen size={16} />
                          )}
                          <span className="admin-content-item-title">{lesson.title}</span>
                        </div>
                        <div className="admin-content-item-meta">
                          <span>Ch {lesson.chapterId}</span>
                          <span>{lesson.duration}</span>
                          <span className={analysis.wordCount < 200 ? 'warning' : ''}>{analysis.wordCount} words</span>
                        </div>
                      </div>
                    );
                  })}
                  {filteredLessons.length === 0 && (
                    <div className="admin-empty-state">
                      <Search size={48} />
                      <p>No lessons found</p>
                    </div>
                  )}
                </div>

                {/* Lesson Detail */}
                <div className="admin-lesson-detail-panel">
                  {selectedLesson ? (
                    <>
                      <div className="admin-detail-header">
                        <h2>{selectedLesson.title}</h2>
                        <div className="admin-detail-actions">
                          <button 
                            className="icon-btn edit"
                            onClick={() => handleEditLesson(selectedLesson, selectedLesson.chapterId)}
                          >
                            <Edit3 size={16} /> Edit
                          </button>
                          <button className="icon-btn" onClick={handleCopyContent}>
                            <Copy size={16} /> Copy
                          </button>
                        </div>
                      </div>
                      <div className="admin-detail-meta">
                        <span><strong>ID:</strong> {selectedLesson.id}</span>
                        <span><strong>Duration:</strong> {selectedLesson.duration}</span>
                        <span><strong>Words:</strong> {analyzeContent(selectedLesson.content).wordCount}</span>
                        <span><strong>Code Blocks:</strong> {analyzeContent(selectedLesson.content).codeBlocks}</span>
                      </div>
                      <div className="admin-detail-content">
                        {renderPreviewContent(selectedLesson.content)}
                      </div>
                    </>
                  ) : (
                    <div className="admin-empty-state">
                      <FileText size={48} />
                      <p>Select a lesson to view details</p>
                    </div>
                  )}
                </div>
              </div>
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

          {/* Content Editor Tab */}
          {activeTab === 'editor' && (
            <div className="admin-editor">
              <div className="admin-section-title">
                <Edit3 size={20} />
                <span>{editingLesson ? 'Edit Lesson' : 'Content Editor'}</span>
              </div>

              {editingLesson ? (
                <>
                  {/* Edit Mode Header */}
                  <div className="editor-header">
                    <div className="editor-form-row">
                      <div className="form-group flex-1">
                        <label>Title</label>
                        <input
                          type="text"
                          value={lessonForm.title}
                          onChange={(e) => setLessonForm({ ...lessonForm, title: e.target.value })}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label>Duration</label>
                        <input
                          type="text"
                          value={lessonForm.duration}
                          onChange={(e) => setLessonForm({ ...lessonForm, duration: e.target.value })}
                          className="form-input"
                          style={{ width: '120px' }}
                        />
                      </div>
                    </div>
                    <div className="editor-actions">
                      <button 
                        className={`toggle-btn ${showLivePreview ? 'active' : ''}`}
                        onClick={() => setShowLivePreview(!showLivePreview)}
                      >
                        {showLivePreview ? <EyeOff size={16} /> : <Eye size={16} />}
                        {showLivePreview ? 'Hide Preview' : 'Live Preview'}
                      </button>
                      <button className="copy-btn" onClick={handleCopyContent}>
                        <Copy size={16} /> Copy
                      </button>
                      <button 
                        className="cancel-btn" 
                        onClick={() => {
                          setEditingLesson(null);
                          setLessonForm({ id: '', title: '', duration: '', content: '', chapterId: '' });
                        }}
                      >
                        Cancel
                      </button>
                      <button className="save-btn" onClick={handleSaveLessonEdit}>
                        <Save size={16} /> Save Changes
                      </button>
                    </div>
                  </div>

                  {/* Editor Content */}
                  <div className={`editor-container ${showLivePreview ? 'split' : ''}`}>
                    <div className="editor-textarea-wrapper">
                      <div className="editor-textarea-header">
                        <Code size={16} /> Markdown Content
                      </div>
                      <textarea
                        value={lessonForm.content}
                        onChange={(e) => setLessonForm({ ...lessonForm, content: e.target.value })}
                        className="editor-textarea"
                        placeholder="Write your lesson content in markdown..."
                      />
                    </div>
                    
                    {showLivePreview && (
                      <div className="editor-preview-wrapper">
                        <div className="editor-preview-header">
                          <Eye size={16} /> Live Preview
                        </div>
                        <div className="editor-preview">
                          <h1>{lessonForm.title}</h1>
                          {renderPreviewContent(lessonForm.content)}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* Lesson Selector */}
                  <div className="admin-lesson-selector">
                    <select 
                      value={selectedLesson?.id || ''} 
                      onChange={(e) => {
                        const lesson = courseData.chapters
                          .flatMap(ch => ch.lessons.map(l => ({ ...l, chapterId: ch.id })))
                          .find(l => l.id === e.target.value);
                        setSelectedLesson(lesson);
                      }}
                    >
                      <option value="">Select a lesson to edit...</option>
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
                    
                    {selectedLesson && (
                      <button 
                        className="edit-selected-btn"
                        onClick={() => handleEditLesson(selectedLesson, selectedLesson.chapterId)}
                      >
                        <Edit3 size={16} /> Edit This Lesson
                      </button>
                    )}
                  </div>

                  {selectedLesson ? (
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
                  ) : (
                    <div className="admin-empty-state">
                      <FileText size={48} />
                      <p>Select a lesson to preview or edit</p>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          {/* Trash Tab */}
          {activeTab === 'trash' && (
            <div className="admin-trash">
              <div className="admin-section-title">
                <Trash2 size={20} />
                <span>Trash ({trash.chapters.length + trash.lessons.length} items)</span>
                {(trash.chapters.length > 0 || trash.lessons.length > 0) && (
                  <button className="empty-trash-btn" onClick={handleEmptyTrash}>
                    Empty Trash
                  </button>
                )}
              </div>

              {trash.chapters.length === 0 && trash.lessons.length === 0 ? (
                <div className="admin-empty-state">
                  <Archive size={48} />
                  <p>Trash is empty</p>
                </div>
              ) : (
                <>
                  {/* Deleted Chapters */}
                  {trash.chapters.length > 0 && (
                    <div className="trash-section">
                      <h4>Deleted Chapters</h4>
                      {trash.chapters.map(chapter => (
                        <div key={chapter.id} className="trash-item">
                          <div className="trash-item-info">
                            <FolderTree size={18} />
                            <div>
                              <span className="trash-item-title">Chapter {chapter.id}: {chapter.title}</span>
                              <span className="trash-item-meta">
                                {chapter.lessons?.length || 0} lessons • Deleted {new Date(chapter.deletedAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <button className="restore-btn" onClick={() => handleRestoreChapter(chapter)}>
                            <Undo2 size={16} /> Restore
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Deleted Lessons */}
                  {trash.lessons.length > 0 && (
                    <div className="trash-section">
                      <h4>Deleted Lessons</h4>
                      {trash.lessons.map(lesson => (
                        <div key={lesson.id} className="trash-item">
                          <div className="trash-item-info">
                            <BookOpen size={18} />
                            <div>
                              <span className="trash-item-title">{lesson.title}</span>
                              <span className="trash-item-meta">
                                From Chapter {lesson.chapterId} • Deleted {new Date(lesson.deletedAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <button className="restore-btn" onClick={() => handleRestoreLesson(lesson)}>
                            <Undo2 size={16} /> Restore
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
