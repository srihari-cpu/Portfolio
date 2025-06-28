
import React, { useState } from 'react';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      name: 'Email Assistant',
      type: 'Reply-Generator',
      rarity: 'legendary',
      tech: ['React', 'Material UI', 'Spring-Boot','GEMINI API'],
      description: '•	Developed an AI-powered email assistant using Gemini API, capable of generating intelligent email replies based on message context.Created a Chrome extension for direct Gmail integration, improving user productivity by reducing email response time',
      demo: 'https://srihari-email-assistant.netlify.app/',
      github: 'https://github.com/srihari-cpu/Email-Assistant',
      image: '🤖',
      stats: { complexity: 95, innovation: 90, impact: 85 }
    },
    {
      id: 2,
      name: 'An Automated Invigilation System',
      type: 'Rare',
      rarity: 'rare',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description: '•	An Automated Invigilation System that assigns invigilators automatically is designed to streamline the process of assigning exam supervisors without manual intervention.',
      demo: 'https://srihari-cpu.github.io/An-Automated-Invigilation-System/',
      github: 'https://github.com/srihari-cpu/An-Automated-Invigilation-System',
      image: '⛓️',
      stats: { complexity: 88, innovation: 85, impact: 92 }
    },
    {
      id: 3,
      name: 'AI Chat Bot',
      type: 'Uncommon',
      rarity: 'uncommon',
      tech: ['Python', 'OpenAI', 'FastAPI'],
      description: 'Intelligent chatbot with natural language processing capabilities.',
      demo: 'https://demo.example.com',
      github: 'https://github.com/example',
      image: '🧠',
      stats: { complexity: 82, innovation: 88, impact: 78 }
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'from-yellow-400 to-orange-500';
      case 'rare': return 'from-blue-400 to-purple-500';
      case 'uncommon': return 'from-green-400 to-teal-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getRarityGlow = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'shadow-yellow-500/50';
      case 'rare': return 'shadow-blue-500/50';
      case 'uncommon': return 'shadow-green-500/50';
      default: return 'shadow-gray-500/50';
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-4xl neon-text mb-4 tracking-wider">
            PROJECT INVENTORY
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Items: {projects.length} | Storage: Unlimited</p>
        </div>

        {/* Inventory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative group cursor-pointer transition-all duration-300 hover:scale-105`}
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Project Card */}
              <div className={`hologram p-6 rounded-lg border-2 border-transparent bg-gradient-to-r ${getRarityColor(project.rarity)} p-0.5`}>
                <div className="bg-gray-900 rounded-lg p-6 h-full">
                  {/* Item Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-4xl">{project.image}</div>
                    <div className={`px-2 py-1 rounded text-xs font-orbitron bg-gradient-to-r ${getRarityColor(project.rarity)} text-black`}>
                      {project.type.toUpperCase()}
                    </div>
                  </div>

                  {/* Project Info */}
                  <h3 className="font-orbitron text-lg text-cyan-400 mb-2">{project.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="space-y-2">
                    {Object.entries(project.stats).map(([stat, value]) => (
                      <div key={stat} className="flex justify-between text-xs">
                        <span className="text-gray-400 capitalize">{stat}</span>
                        <span className="text-cyan-400">{value}%</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ${getRarityGlow(project.rarity)} shadow-2xl`}></div>
                </div>
              </div>

              {/* Rarity Shimmer */}
              <div className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`absolute inset-0 bg-gradient-to-r ${getRarityColor(project.rarity)} opacity-20 animate-pulse`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={() => setSelectedProject(null)}>
            <div className="hologram max-w-2xl w-full p-8 rounded-lg" onClick={(e) => e.stopPropagation()}>
              {(() => {
                const project = projects.find(p => p.id === selectedProject)!;
                return (
                  <div>
                    {/* Modal Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-orbitron text-2xl text-cyan-400 mb-2">{project.name}</h3>
                        <div className={`inline-block px-3 py-1 rounded text-sm font-orbitron bg-gradient-to-r ${getRarityColor(project.rarity)} text-black`}>
                          {project.type.toUpperCase()}
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-white text-2xl"
                      >
                        ×
                      </button>
                    </div>

                    {/* Project Details */}
                    <div className="mb-6">
                      <div className="text-6xl text-center mb-4">{project.image}</div>
                      <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                      
                      {/* Tech Stack */}
                      <div className="mb-4">
                        <h4 className="text-cyan-400 font-orbitron mb-2">TECH STACK</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-800 text-cyan-400 rounded font-mono border border-cyan-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="mb-6">
                        <h4 className="text-cyan-400 font-orbitron mb-2">PROJECT STATS</h4>
                        <div className="space-y-3">
                          {Object.entries(project.stats).map(([stat, value]) => (
                            <div key={stat}>
                              <div className="flex justify-between mb-1">
                                <span className="text-gray-300 capitalize">{stat}</span>
                                <span className="text-cyan-400">{value}%</span>
                              </div>
                              <div className="h-2 bg-gray-700 rounded overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded"
                                  style={{ width: `${value}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-center rounded font-orbitron hover:from-cyan-400 hover:to-blue-400 transition-colors"
                        >
                          LAUNCH DEMO
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 border border-cyan-500 text-center rounded font-orbitron hover:bg-cyan-500/10 transition-colors"
                        >
                          VIEW CODE
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
