import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Reel App Video shearing platform',
      description: 'A modern video shearing platform built with MERN stack featuring user authentication, role based auth, and partner dashboard.',
      image: 'https://i.pinimg.com/1200x/21/37/da/2137da96723ebbef20a7b4df3e5115db.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'express', 'imagKit', 'cloudinary', 'tailwind css'],
      github: 'https://github.com/KGN15/FRONTEND-reel-clint-side',
      live: 'https://reelappmr.vercel.app/',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Authentication App',
      description: 'A collaborative authentication application with real-time updates, profile edits functionality, and team collaboration features.',
      image: 'https://i.pinimg.com/736x/7f/fe/81/7ffe8123aa920f66a18878a1cfa4df33.jpg',
      technologies: ['react.js', 'Firebase', 'FireStore', 'CSS3'],
      github: 'https://github.com/KGN15/Assignment--06-React-Auth-with-firebase-',
      live: 'https://assignment-06-react-auth-with-fireb.vercel.app/',
      gradient: 'from-yellow-500 to-yellow-900'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with smooth animations, dark mode toggle, and optimized performance for showcasing creative work.',
      image: 'https://i.pinimg.com/736x/75/22/77/7522775396d64dcd2ca3b5a64245fb01.jpg',
      technologies: ['JavaScript','Three.js', 'GSAP', 'CSS3', 'HTML5'],
      github: 'https://github.com/KGN15/Mashhudur-Rahman-portfolio/tree/main/Asinment-4-Portfolio-Website',
      live: 'https://mashhudurrahman.netlify.app/',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <>
      <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for web development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,245,255,0.2)] hover:scale-105 project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>

                  {/* Overlay Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/80 rounded-full hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(0,245,255,0.5)] transition-all duration-300"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/80 rounded-full hover:bg-purple-500/20 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 font-orbitron group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            ))}
          </div>
        </div>
        <Link to="/projects" className="relative mt-10 hover:bg-cyan-400 mx-auto block py-3 px-6 w-50 text-center bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all active:scale-95 disabled:opacity-50">
          View All Projects
        </Link>
      </section>
    </>
  );
};

export default Projects;