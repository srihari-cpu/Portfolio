
import React from 'react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      name: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 95, experience: '4 years' },
        { name: 'TypeScript', level: 90, experience: '3 years' },
        { name: 'Vue.js', level: 85, experience: '2 years' },
        { name: 'Three.js', level: 80, experience: '2 years' },
        { name: 'CSS/SCSS', level: 92, experience: '5 years' }
      ]
    },
    {
      name: 'Backend Technologies',
      skills: [
        { name: 'Node.js', level: 88, experience: '3 years' },
        { name: 'Python', level: 85, experience: '4 years' },
        { name: 'Express.js', level: 90, experience: '3 years' },
        { name: 'PostgreSQL', level: 82, experience: '2 years' },
        { name: 'MongoDB', level: 78, experience: '2 years' }
      ]
    },
    {
      name: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 93, experience: '5 years' },
        { name: 'Docker', level: 80, experience: '2 years' },
        { name: 'AWS', level: 75, experience: '1 year' },
        { name: 'Figma', level: 85, experience: '3 years' },
        { name: 'Linux', level: 82, experience: '4 years' }
      ]
    }
  ];

  const certifications = [
    { name: 'AWS Certified Developer', date: '2023', status: 'active' },
    { name: 'React Professional Certificate', date: '2022', status: 'active' },
    { name: 'Google Cloud Professional', date: '2023', status: 'active' },
    { name: 'Agile Scrum Master', date: '2021', status: 'active' }
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
                        <span className="text-gray-500 text-xs">({skill.experience})</span>
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
            <div className="text-2xl font-orbitron text-cyan-400 mb-1">150+</div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
          
          <div className="hologram p-6 rounded-lg text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-orbitron text-cyan-400 mb-1">5+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          
          <div className="hologram p-6 rounded-lg text-center">
            <div className="text-3xl mb-2">🛠️</div>
            <div className="text-2xl font-orbitron text-cyan-400 mb-1">25+</div>
            <div className="text-sm text-gray-400">Technologies Mastered</div>
          </div>
          
          <div className="hologram p-6 rounded-lg text-center">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-orbitron text-cyan-400 mb-1">12+</div>
            <div className="text-sm text-gray-400">Awards & Recognition</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
