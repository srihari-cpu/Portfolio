
import React, { useState, useEffect } from 'react';
import StartScreen from '../components/StartScreen';
import Navigation from '../components/Navigation';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = () => {
    setIsLoading(true);
    setTimeout(() => {
      setHasStarted(true);
      setIsLoading(false);
    }, 2000);
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!hasStarted) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      const sections = ['about', 'projects', 'skills', 'contact'];
      const currentIndex = sections.indexOf(activeSection);

      switch (e.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (currentIndex > 0) {
            setActiveSection(sections[currentIndex - 1]);
          }
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          if (currentIndex < sections.length - 1) {
            setActiveSection(sections[currentIndex + 1]);
          }
          break;
        case 'Escape':
          setHasStarted(false);
          setActiveSection('about');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [hasStarted, activeSection]);

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="font-orbitron text-2xl neon-text mb-8">LOADING PORTFOLIO...</div>
          <div className="w-64 h-2 bg-gray-800 rounded overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded animate-pulse"></div>
          </div>
          <div className="mt-4 text-sm text-cyan-400 terminal-cursor">
            Initializing user interface
          </div>
        </div>
      </div>
    );
  }

  // Start screen
  if (!hasStarted) {
    return <StartScreen onStart={handleStart} />;
  }

  // Main portfolio interface
  return (
    <div className="min-h-screen relative">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(cyan 1px, transparent 1px),
                linear-gradient(90deg, cyan 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full floating opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />

      {/* Main Content */}
      <main className="relative z-10">
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'skills' && <SkillsSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>

      {/* Footer UI */}
      <div className="fixed bottom-4 left-4 right-4 z-50">
        <div className="flex justify-between items-center text-xs text-cyan-500 font-mono">
          <div>Press ESC to return to start</div>
          <div>Use A/D or ← → to navigate</div>
          <div>FPS: 60 | Ping: 12ms</div>
        </div>
      </div>

      {/* Sound toggle (placeholder) */}
      <button className="fixed top-20 right-4 z-50 p-2 hologram rounded text-cyan-400 hover:neon-glow transition-all">
        🔊
      </button>
    </div>
  );
};

export default Index;
