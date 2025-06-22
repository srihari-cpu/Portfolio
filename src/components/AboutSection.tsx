
import React from 'react';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'Java', level: 90, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', level: 85, color: 'from-blue-400 to-cyan-500' },
    { name: 'JavaScript', level: 80, color: 'from-blue-500 to-indigo-500' },
    { name: 'Node.js', level: 75, color: 'from-green-400 to-emerald-500' },
    { name: 'Python', level: 70, color: 'from-blue-400 to-green-400' },
    { name: 'MongoDB', level: 65, color: 'from-purple-400 to-pink-500' }
  ];

  const attributes = [
    { name: 'Problem Solving', value: 95 },
    { name: 'Team Collaboration', value: 88 },
    { name: 'Creativity', value: 92 },
    { name: 'Leadership', value: 78 }
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-4xl neon-text mb-4 tracking-wider">
            Student PROFILE
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Player Info Card */}
          <div className="hologram p-6 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1 mr-6">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-3xl">👨‍💻</span>
                </div>
              </div>
              <div>
                <h3 className="font-orbitron text-2xl text-cyan-400 mb-2">Srihari Rangampeta</h3>
                <div className="text-gray-300 mb-1">Full Stack Developer</div>
                <div className="text-sm text-cyan-500">Level 5 • XP: 8,750 / 10,000</div>
                <div className="w-48 h-2 bg-gray-700 rounded mt-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded w-3/4"></div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-cyan-400 font-orbitron mb-2">MISSION STATEMENT</h4>
                <p className="text-gray-300 leading-relaxed">
                Full Stack Developer proficient in Java and Spring Boot with hands-on experience building scalable web applications and integrating AI technologies. Strong focus on clean code, REST APIs, and solving real-world technical challenges
                </p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-orbitron mb-2">LOCATION</h4>
                <p className="text-gray-300">🌍 Remote • Global Server</p>
              </div>

              <div>
                <h4 className="text-cyan-400 font-orbitron mb-2">STATUS</h4>
                <p className="text-green-400">🟢 Available for new quests</p>
              </div>
            </div>
          </div>

          {/* Skills Panel */}
          <div className="space-y-6">
            {/* Technical Skills */}
            <div className="hologram p-6 rounded-lg">
              <h4 className="font-orbitron text-xl text-cyan-400 mb-4">TECHNICAL SKILLS</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded transition-all duration-1000 group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Character Attributes */}
            <div className="hologram p-6 rounded-lg">
              <h4 className="font-orbitron text-xl text-cyan-400 mb-4">CHARACTER ATTRIBUTES</h4>
              <div className="grid grid-cols-2 gap-4">
                {attributes.map((attr, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-full border-4 border-cyan-400 flex items-center justify-center mx-auto mb-2 neon-glow">
                      <span className="font-orbitron text-cyan-400 font-bold">{attr.value}</span>
                    </div>
                    <div className="text-sm text-gray-300">{attr.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="mt-12 hologram p-6 rounded-lg">
          <h4 className="font-orbitron text-xl text-cyan-400 mb-6">ACHIEVEMENTS UNLOCKED</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Code Master', icon: '🏆', desc: 'Written 100k+ lines of code' },
              { name: 'Bug Hunter', icon: '🐛', desc: 'Fixed 500+ bugs' },
              { name: 'Team Player', icon: '🤝', desc: 'Led 10+ projects' },
              { name: 'Innovation', icon: '💡', desc: 'Created 5 unique solutions' }
            ].map((achievement, index) => (
              <div key={index} className="text-center p-4 bg-gray-800/50 rounded-lg hover:neon-glow transition-all duration-300 cursor-pointer">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className="font-orbitron text-cyan-400 text-sm mb-1">{achievement.name}</div>
                <div className="text-xs text-gray-400">{achievement.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
