
import React from 'react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'about', label: 'PROFILE', icon: '👤' },
    { id: 'projects', label: 'INVENTORY', icon: '🎮' },
    { id: 'skills', label: 'STATS', icon: '⚡' },
    { id: 'contact', label: 'TERMINAL', icon: '💻' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="hologram rounded-lg p-4 max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="font-orbitron text-xl neon-text tracking-wider">
            PORTFOLIO.EXE
          </div>

          {/* Navigation Menu */}
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`relative px-4 py-2 font-rajdhani text-sm tracking-wider transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-cyan-400 neon-glow'
                    : 'text-gray-400 hover:text-cyan-300'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded"></div>
              </button>
            ))}
          </div>

          {/* System Status */}
          <div className="text-xs text-green-400 font-mono">
            [ONLINE]
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
