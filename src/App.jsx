import { useState, useEffect } from 'react';
import { courseData } from './data/courseData';
import {
  Menu, X, ChevronRight, BookOpen, Clock, CheckCircle2,
  Lightbulb, AlertTriangle, Play, Home, Shield, ImageIcon
} from 'lucide-react';
import './index.css';

const chapterInfographics = {
  1: { src: '/infographics/ch1-what-is-cybersecurity.jpg', alt: 'What is Cybersecurity - CIA Triad & Internet Basics' },
  2: { src: '/infographics/ch2-passwords-authentication.jpg', alt: 'Passwords & Authentication - Cracking, Rainbow Tables, 2FA' },
  3: { src: '/infographics/ch3-social-engineering.jpg', alt: 'Social Engineering - Phishing, Vishing, Baiting, Pretexting' },
  4: { src: '/infographics/ch4-encryption-cryptography.jpg', alt: 'Encryption & Cryptography - Symmetric, Asymmetric, HTTPS, Hashing' },
  5: { src: '/infographics/ch5-network-security.jpg', alt: 'Network Security - Scanning, Firewalls, IDS/IPS' },
  6: { src: '/infographics/ch6-web-vulnerabilities.jpg', alt: 'Web Vulnerabilities - SQL Injection, XSS, CSRF' },
  7: { src: '/infographics/ch7-ethical-hacking-tools.jpg', alt: 'Ethical Hacking Toolkit - Nmap, Metasploit, Burp Suite' },
  8: { src: '/infographics/ch8-capture-the-flag.jpg', alt: 'Capture The Flag - CTF Categories & Platforms' },
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [currentLesson, setCurrentLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('cybersecurity-progress');
    if (saved) setCompletedLessons(JSON.parse(saved));
  }, []);

  const saveProgress = (lessonId) => {
    const updated = [...completedLessons, lessonId];
    setCompletedLessons(updated);
    localStorage.setItem('cybersecurity-progress', JSON.stringify(updated));
  };

  const totalLessons = courseData.chapters.reduce((acc, ch) => acc + ch.lessons.length, 0);
  const progress = Math.round((completedLessons.length / totalLessons) * 100);

  const navigateToLesson = (lesson) => {
    setCurrentLesson(lesson);
    setCurrentView('lesson');
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  };

  const findNextLesson = () => {
    if (!currentLesson) return null;
    for (let i = 0; i < courseData.chapters.length; i++) {
      const chapter = courseData.chapters[i];
      for (let j = 0; j < chapter.lessons.length; j++) {
        if (chapter.lessons[j].id === currentLesson.id) {
          if (j < chapter.lessons.length - 1) return chapter.lessons[j + 1];
          if (i < courseData.chapters.length - 1) return courseData.chapters[i + 1].lessons[0];
        }
      }
    }
    return null;
  };

  const findPrevLesson = () => {
    if (!currentLesson) return null;
    for (let i = 0; i < courseData.chapters.length; i++) {
      const chapter = courseData.chapters[i];
      for (let j = 0; j < chapter.lessons.length; j++) {
        if (chapter.lessons[j].id === currentLesson.id) {
          if (j > 0) return chapter.lessons[j - 1];
          if (i > 0) {
            const prev = courseData.chapters[i - 1];
            return prev.lessons[prev.lessons.length - 1];
          }
        }
      }
    }
    return null;
  };

  const renderContent = (content) => {
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
            <div key={`code-${i}`} className="code-block">
              <div className="code-header">
                <span className="code-language">{codeLanguage}</span>
                <button className="code-copy" onClick={() => navigator.clipboard.writeText(codeContent.join('\n'))}>Copy</button>
              </div>
              <div className="code-content"><pre>{codeContent.join('\n')}</pre></div>
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
          <div key={`tip-${i}`} className="tip-box">
            <div className="tip-box-header"><Lightbulb size={18} /><span>Pro Tip</span></div>
            <p>{tipContent.join(' ').replace('💡 ', '')}</p>
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
          <div key={`warn-${i}`} className="warning-box">
            <div className="warning-box-header"><AlertTriangle size={18} /><span>Warning</span></div>
            <p>{warnContent.join(' ').replace('⚠️ ', '')}</p>
          </div>
        );
        i++;
        continue;
      }

      if (line.startsWith('## ')) { elements.push(<h2 key={`h2-${i}`}>{line.slice(3)}</h2>); i++; continue; }
      if (line.startsWith('### ')) { elements.push(<h3 key={`h3-${i}`}>{line.slice(4)}</h3>); i++; continue; }

      if (line.includes('|') && lines[i + 1]?.includes('---')) {
        const headers = line.split('|').filter(h => h.trim()).map(h => h.trim());
        i += 2;
        const rows = [];
        while (i < lines.length && lines[i].includes('|')) {
          rows.push(lines[i].split('|').filter(c => c.trim()).map(c => c.trim()));
          i++;
        }
        elements.push(
          <div key={`table-${i}`} style={{ overflowX: 'auto', margin: '20px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--bg-card)', borderRadius: '12px', overflow: 'hidden' }}>
              <thead>
                <tr>{headers.map((h, idx) => (
                  <th key={idx} style={{ padding: '12px 16px', textAlign: 'left', borderBottom: '1px solid var(--border-color)', color: 'var(--accent-red)' }}>{h}</th>
                ))}</tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri}>{row.map((cell, ci) => (
                    <td key={ci} style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
                      <span dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text-primary)">$1</strong>').replace(/`(.*?)`/g, '<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px;font-size:13px">$1</code>') }} />
                    </td>
                  ))}</tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      }

      if (line.startsWith('- ') || line.startsWith('* ')) {
        const items = [];
        while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) { items.push(lines[i].slice(2)); i++; }
        elements.push(
          <ul key={`ul-${i}`}>{items.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/`(.*?)`/g, '<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px">$1</code>') }} />
          ))}</ul>
        );
        continue;
      }

      if (/^\d+\. /.test(line)) {
        const items = [];
        while (i < lines.length && /^\d+\. /.test(lines[i])) { items.push(lines[i].replace(/^\d+\. /, '')); i++; }
        elements.push(
          <ol key={`ol-${i}`}>{items.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/`(.*?)`/g, '<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px">$1</code>') }} />
          ))}</ol>
        );
        continue;
      }

      if (line.trim()) {
        elements.push(
          <p key={`p-${i}`} dangerouslySetInnerHTML={{ __html: line
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/`(.*?)`/g, '<code style="background:rgba(239,68,68,0.1);padding:2px 6px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:14px">$1</code>')
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" style="color:var(--accent-cyan)">$1</a>')
          }} />
        );
      }
      i++;
    }
    return elements;
  };

  return (
    <div className="app-container">
      <div className="bg-grid" />
      <div className="bg-noise" />
      <div className="gradient-orb orb-red" />
      <div className="gradient-orb orb-cyan" />
      <div className="gradient-orb orb-purple" />

      <button className="mobile-menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={() => setSidebarOpen(false)} />

      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo"><Shield size={24} /></div>
          <span className="sidebar-title">Cybersecurity</span>
        </div>

        <nav className="sidebar-nav">
          <div className={`nav-item ${currentView === 'home' ? 'active' : ''}`} onClick={() => { setCurrentView('home'); setSidebarOpen(false); }}>
            <Home size={20} className="nav-item-icon" /><span>Home</span>
          </div>

          {courseData.chapters.map((chapter) => (
            <div key={chapter.id} className="nav-section">
              <div className="nav-section-title">Ch {chapter.id}: {chapter.title}</div>
              {chapter.lessons.map((lesson) => (
                <div key={lesson.id} className={`nav-item ${currentLesson?.id === lesson.id ? 'active' : ''}`} onClick={() => navigateToLesson(lesson)}>
                  {completedLessons.includes(lesson.id) ? <CheckCircle2 size={18} className="nav-item-icon" style={{ color: 'var(--accent-green)' }} /> : <BookOpen size={18} className="nav-item-icon" />}
                  <span>{lesson.title}</span>
                </div>
              ))}
            </div>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', padding: '20px', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
            <span>Progress</span><span>{progress}%</span>
          </div>
          <div className="progress-bar"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>
        </div>
      </aside>

      <main className="main-content">
        {currentView === 'home' && (
          <>
            <div className="hero">
              <div className="hero-badge"><Shield size={16} /><span>Cybersecurity Course</span></div>
              <h1 className="hero-title">Learn<br /><span>Cybersecurity</span></h1>
              <p className="hero-subtitle">Understand how hackers think, protect yourself online, and start your ethical hacking journey. No experience required!</p>
              <button className="nav-button primary" onClick={() => navigateToLesson(courseData.chapters[0].lessons[0])} style={{ margin: '0 auto' }}>
                <Play size={20} />Start Learning
              </button>
            </div>

            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px' }}>Course Chapters</h2>
              {courseData.chapters.map((chapter) => {
                const done = chapter.lessons.filter(l => completedLessons.includes(l.id)).length;
                const infographic = chapterInfographics[chapter.id];
                return (
                  <div key={chapter.id} className="chapter-card" onClick={() => navigateToLesson(chapter.lessons[0])} style={{ flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
                    {infographic && (
                      <div style={{ width: '100%', height: '160px', overflow: 'hidden', position: 'relative' }}>
                        <img src={`${import.meta.env.BASE_URL}${infographic.src.slice(1)}`} alt={infographic.alt} loading="lazy"
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.3s ease' }} />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px', background: 'linear-gradient(transparent, var(--bg-card))' }} />
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 20px', width: '100%' }}>
                      <div className="chapter-number">{chapter.id}</div>
                      <div className="chapter-info">
                        <div className="chapter-title">{chapter.title}</div>
                        <div className="chapter-meta">
                          {chapter.description} • {chapter.lessons.length} lessons
                          {done > 0 && <span style={{ color: 'var(--accent-green)', marginLeft: '8px' }}>({done}/{chapter.lessons.length} complete)</span>}
                        </div>
                      </div>
                      <ChevronRight size={24} style={{ color: 'var(--text-muted)' }} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="glass-card" style={{ textAlign: 'center' }}>
              <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>What You'll Learn</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>By the end, you'll understand how real attacks work and how to defend against them:</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
                {['Password Security', 'Phishing Defense', 'Encryption', 'Network Scanning', 'Web Hacking', 'CTF Challenges'].map((item) => (
                  <div key={item} style={{ padding: '16px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                    <CheckCircle2 size={24} style={{ color: 'var(--accent-red)', marginBottom: '8px' }} />
                    <div style={{ fontWeight: '500' }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {currentView === 'lesson' && currentLesson && (
          <div className="lesson-container">
            <div className="lesson-header">
              <div className="lesson-breadcrumb">
                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('home'); }}>Home</a>
                <ChevronRight size={16} /><span>{currentLesson.title}</span>
              </div>
              <h1 className="lesson-title">{currentLesson.title}</h1>
              <div className="lesson-meta">
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} />{currentLesson.duration}</span>
                {completedLessons.includes(currentLesson.id) && (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-green)' }}><CheckCircle2 size={16} />Completed</span>
                )}
              </div>
            </div>

            {(() => {
              const chapterId = parseInt(currentLesson.id);
              const infographic = chapterInfographics[chapterId];
              if (!infographic) return null;
              return (
                <div className="infographic-container">
                  <div className="infographic-badge"><ImageIcon size={14} /><span>Chapter {chapterId} Infographic</span></div>
                  <img
                    src={`${import.meta.env.BASE_URL}${infographic.src.slice(1)}`}
                    alt={infographic.alt}
                    className="infographic-image"
                    loading="lazy"
                    onClick={(e) => e.target.classList.toggle('expanded')}
                  />
                  <p className="infographic-caption">👆 Tap to expand</p>
                </div>
              );
            })()}

            <div className="lesson-content">{renderContent(currentLesson.content)}</div>

            {!completedLessons.includes(currentLesson.id) && (
              <button className="nav-button primary" style={{ width: '100%', justifyContent: 'center', marginTop: '32px' }} onClick={() => saveProgress(currentLesson.id)}>
                <CheckCircle2 size={20} />Mark as Complete
              </button>
            )}

            <div className="lesson-nav">
              {findPrevLesson() ? (
                <button className="nav-button" onClick={() => navigateToLesson(findPrevLesson())}>
                  <ChevronRight size={20} style={{ transform: 'rotate(180deg)' }} />Previous
                </button>
              ) : <div />}
              {findNextLesson() ? (
                <button className="nav-button primary" onClick={() => navigateToLesson(findNextLesson())}>
                  Next Lesson<ChevronRight size={20} />
                </button>
              ) : (
                <button className="nav-button primary" onClick={() => setCurrentView('home')}>
                  Finish Course<CheckCircle2 size={20} />
                </button>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
