
import React from 'react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      name: 'Frontend Technologies',
      skills: [
        { name: 'HTML', level: 80},
        { name: 'CSS', level: 85},
        { name: 'JavaScript', level: 80},
        { name: 'React', level: 86}
      ]
    },
    {
      name: 'Backend Technologies',
      skills: [
        { name: 'Spring-Boot', level: 82},
        { name: 'Node.js', level: 88},
        { name: 'Java', level: 85},
        { name: 'MongoDB', level: 78}
      ]
    },
    {
      name: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 93},
        { name: 'Postman', level: 82}
      ]
    }
  ];

  const certifications = [
    { name: 'Java', date: '2025', status: 'active' },
    { name: 'JavaScript Professional Certificate', date: '2024', status: 'active' },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-4xl neon-text mb-4 tracking-wider">
            CHARACTER STATS
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Current Level: 25 • Total XP: 125,750</p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="hologram p-6 rounded-lg">
              <h3 className="font-orbitron text-xl text-cyan-400 mb-6">{category.name.toUpperCase()}</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-cyan-400 font-orbitron text-sm">{skill.level}%</span>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                      
                      {/* Level indicator */}
                      <div 
                        className="absolute top-0 w-2 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2"
                        style={{ left: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="hologram p-6 rounded-lg mb-8">
          <h3 className="font-orbitron text-xl text-cyan-400 mb-6">CERTIFICATIONS & ACHIEVEMENTS</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-cyan-500/30">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-orbitron font-bold">✓</span>
                </div>
                <div className="flex-1">
                  <div className="text-gray-300 font-medium">{cert.name}</div>
                  <div className="text-sm text-gray-400">Earned: {cert.date}</div>
                </div>
                <div className="text-green-400 text-sm font-orbitron">
                  {cert.status.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="hologram p-6 rounded-lg text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-orbitron text-cyan-400 mb-1">50+</div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
          
          <div className="hologram p-6 rounded-lg text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-orbitron text-cyan-400 mb-1">0+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          
          <div className="hologram p-6 rounded-lg text-center">
            <div className="text-3xl mb-2">🛠️</div>
            <div className="text-2xl font-orbitron text-cyan-400 mb-1">10+</div>
            <div className="text-sm text-gray-400">Technologies Mastered</div>
          </div>
          
          <div className="hologram p-6 rounded-lg text-center">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-orbitron text-cyan-400 mb-1">5+</div>
            <div className="text-sm text-gray-400">Awards & Recognition</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
