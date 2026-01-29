import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Javascript', percentage: 95, color: 'from-orange-400 to-red-500' },
    { name: 'Express.js', percentage: 90, color: 'from-blue-400 to-cyan-500' },
    { name: 'MongoDB', percentage: 85, color: 'from-yellow-400 to-orange-400' },
    { name: 'React', percentage: 80, color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', percentage: 88, color: 'from-teal-400 to-cyan-400' },
    { name: 'Tailwind css', percentage: 75, color: 'from-blue-600 to-purple-500' }
  ];

  const technologies = [
    'MongoDB','Express.js','React.js','Node.js','REST Api','Jwt','HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Git','GitHub','Figma','Canva','Gsap' ,'Vite'
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-purple-900/10 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-textGlow">
            Skills & Technologies
          </h2>
          <div className="w-28 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 shadow-lg"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Skill Bars */}
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Proficiency</h3>
            {skills.map((skill, idx) => (
              <div key={skill.name} className="group" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-cyan-400 font-semibold">{skill.percentage}%</span>
                </div>
                <div className="h-4 bg-gray-800 rounded-full overflow-hidden shadow-inner">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden group-hover:shadow-[0_0_25px_rgba(0,245,255,0.4)] transition-all duration-700`}
                    style={{ width: `${skill.percentage}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Technologies</h3>
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech, idx) => (
                <span
                  key={tech}
                  className="px-6 py-3 bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-full cursor-pointer text-gray-300 text-sm md:text-base font-medium transition-all duration-300 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(0,245,255,0.5)] hover:scale-110 cursor-default"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Glassmorphism Info Card */}
            <div className="mt-12 p-8 bg-gray-800/30 backdrop-blur-xl rounded-3xl border cursor-pointer border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]">
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-4 font-orbitron">Always Learning</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
I specialize in building robust and scalable backend systems, leveraging modern server frameworks and database technologies to handle high-traffic applications efficiently. Alongside this, I also explore frontend development, diving into React, interactive animations, and CSS3 techniques to deliver polished, user-friendly interfaces.

              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shimmer animation */}
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite linear;
          }
          @keyframes textGlow {
            0%,100% { text-shadow: 0 0 8px #00fff5, 0 0 12px #9f7aea; }
            50% { text-shadow: 0 0 12px #00fff5, 0 0 20px #9f7aea; }
          }
          .animate-textGlow { animation: textGlow 3s infinite alternate; }
        `}
      </style>
    </section>
  );
};

export default Skills;
