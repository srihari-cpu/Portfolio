
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    '> System initialized...',
    '> Contact protocol loaded',
    '> Ready for communication',
    '> Type "help" for available commands'
  ]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newHistory = [...terminalHistory, `> ${terminalInput}`];
    
    switch (terminalInput.toLowerCase()) {
      case 'help':
        newHistory.push('Available commands:', '- help: Show this help', '- status: Show system status', '- contact: Show contact info', '- clear: Clear terminal');
        break;
      case 'status':
        newHistory.push('System Status: ONLINE', 'Response Time: <100ms', 'Availability: 99.9%');
        break;
      case 'contact':
        newHistory.push('Email: alex.developer@email.com', 'Location: Remote Global', 'Timezone: UTC+0');
        break;
      case 'clear':
        setTerminalHistory(['> Terminal cleared', '> Ready for input']);
        setTerminalInput('');
        return;
      default:
        newHistory.push(`Command not found: ${terminalInput}`, 'Type "help" for available commands');
    }
    
    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-4xl neon-text mb-4 tracking-wider">
            COMMUNICATION TERMINAL
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Secure Channel Established • Encryption: AES-256</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Terminal Interface */}
          <div className="hologram p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-gray-400 font-mono">alex@portfolio:~$</div>
            </div>

            {/* Terminal Output */}
            <div className="bg-black rounded p-4 mb-4 h-64 overflow-y-auto font-mono text-sm">
              {terminalHistory.map((line, index) => (
                <div key={index} className="text-green-400 mb-1">
                  {line}
                </div>
              ))}
            </div>

            {/* Terminal Input */}
            <form onSubmit={handleTerminalSubmit} className="flex items-center">
              <span className="text-green-400 font-mono mr-2">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                className="flex-1 bg-transparent text-green-400 font-mono outline-none border-none terminal-cursor"
                placeholder="Enter command..."
                autoFocus
              />
            </form>

            {/* Quick Commands */}
            <div className="mt-4 flex flex-wrap gap-2">
              {['help', 'status', 'contact', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => {
                    setTerminalInput(cmd);
                    const event = new Event('submit', { bubbles: true, cancelable: true });
                    document.querySelector('form')?.dispatchEvent(event);
                  }}
                  className="px-3 py-1 bg-gray-800 text-green-400 rounded text-xs font-mono hover:bg-gray-700 transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="hologram p-6 rounded-lg">
            <h3 className="font-orbitron text-xl text-cyan-400 mb-6">SEND TRANSMISSION</h3>
            
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-orbitron text-cyan-400 mb-2">
                  SENDER ID
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-gray-800/50 border border-cyan-500/30 rounded p-3 text-white focus:border-cyan-400 focus:neon-glow transition-all outline-none"
                  placeholder="Enter your name..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-orbitron text-cyan-400 mb-2">
                  COMM FREQUENCY
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-gray-800/50 border border-cyan-500/30 rounded p-3 text-white focus:border-cyan-400 focus:neon-glow transition-all outline-none"
                  placeholder="your.email@domain.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-orbitron text-cyan-400 mb-2">
                  MESSAGE PAYLOAD
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-gray-800/50 border border-cyan-500/30 rounded p-3 text-white focus:border-cyan-400 focus:neon-glow transition-all outline-none h-32 resize-none"
                  placeholder="Type your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded font-orbitron hover:from-cyan-400 hover:to-blue-400 transition-all neon-glow"
              >
                TRANSMIT MESSAGE
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-cyan-500/30">
              <h4 className="font-orbitron text-cyan-400 mb-4">DIRECT CHANNELS</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-3">📧</span>
                  <span className="text-gray-300">alex.developer@email.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-3">💼</span>
                  <span className="text-gray-300">linkedin.com/in/alexdev</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-3">🐙</span>
                  <span className="text-gray-300">github.com/alexdev</span>
                </div>
                <div className="flex items-center">
                  <span className="text-cyan-400 mr-3">🌐</span>
                  <span className="text-gray-300">Remote • Global Timezone</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Status Bar */}
        <div className="mt-8 hologram p-4 rounded-lg">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-6">
              <span className="text-green-400">🟢 SYSTEM ONLINE</span>
              <span className="text-cyan-400">📡 SIGNAL STRENGTH: 100%</span>
              <span className="text-blue-400">🔒 SECURE CONNECTION</span>
            </div>
            <div className="text-gray-400 font-mono">
              Last Update: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
