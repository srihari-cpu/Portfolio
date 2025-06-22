
import React, { useState } from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [isStarting, setIsStarting] = useState(false);

  const handleStart = () => {
    setIsStarting(true);
    setTimeout(() => {
      onStart();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Matrix Background Effect */}
      <div className="matrix-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className={`text-center z-10 transition-all duration-1000 ${
        isStarting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}>
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="font-orbitron text-6xl md:text-8xl font-black neon-text mb-4 tracking-wider">
            Rangampeta Srihari
          </h1>
          <div className="text-xl md:text-2xl text-cyan-300 font-light tracking-[0.3em] mb-2">
            FULL-STACK DEVELOPER
          </div>
          <div className="text-sm text-cyan-500 tracking-[0.5em] font-rajdhani">
            INTERACTIVE EXPERIENCE
          </div>
        </div>

        {/* Glitch Effect Line */}
        <div className="w-64 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8 pulse-glow"></div>

        {/* Start Button */}
        <button
          onClick={handleStart}
          className="group relative px-8 py-4 bg-transparent neon-border hover:neon-glow transition-all duration-300 font-orbitron text-lg tracking-wider"
          disabled={isStarting}
        >
          <span className="relative z-10 text-cyan-100 group-hover:text-white transition-colors">
            {isStarting ? 'INITIALIZING...' : 'PRESS START'}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Scan line effect */}
          <div className="scan-line absolute inset-0"></div>
        </button>

        {/* Loading Bar */}
        {isStarting && (
          <div className="mt-8 w-64 mx-auto">
            <div className="h-2 bg-gray-800 rounded overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded animate-pulse"></div>
            </div>
            <div className="text-xs text-cyan-400 mt-2 terminal-cursor">
              Loading profile data
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-12 text-sm text-gray-400 font-rajdhani">
          <div className="mb-2">Use WASD or Arrow Keys to Navigate</div>
          <div>Press ESC to Return to Menu</div>
        </div>
      </div>

      {/* Corner UI Elements */}
      <div className="absolute top-4 left-4 text-xs text-cyan-500 font-mono">
        [SYSTEM ONLINE]
      </div>
      <div className="absolute top-4 right-4 text-xs text-cyan-500 font-mono">
        [VER 2.0.1]
      </div>
      <div className="absolute bottom-4 left-4 text-xs text-cyan-500 font-mono">
        [READY]
      </div>
      <div className="absolute bottom-4 right-4 text-xs text-cyan-500 font-mono">
        [CONN: STABLE]
      </div>
    </div>
  );
};

export default StartScreen;
