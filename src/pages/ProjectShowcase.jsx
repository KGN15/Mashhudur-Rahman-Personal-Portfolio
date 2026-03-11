import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Layers, Link, ArrowBigLeftDashIcon } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
const ProjectShowcase = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
const GET_PROJECTS_API_URL = import.meta.env.VITE_PROJECT_API;
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(GET_PROJECTS_API_URL);
        setProjects(res.data.projects);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="min-h-screen bg-[#020617] py-20 px-6 relative overflow-hidden">
      <RouterLink to={"/"} className="relative hover:bg-cyan-400 mx-auto block flex justify-center mb-10 items-center h-10 w-50 text-center bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all active:scale-95 disabled:opacity-50">
        <ArrowBigLeftDashIcon/> Go Back
      </RouterLink>
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-cyan-400 font-mono tracking-widest mb-3"
          >
            MY MASTERPIECES
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects.</span>
          </motion.h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-cyan-500"></div>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project._id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-gray-900/40 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-md hover:border-cyan-500/50 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.name} 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-3 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                    <a href={project.repoLink} target="_blank" className="p-3 bg-white/10 backdrop-blur-xl rounded-full text-white hover:bg-cyan-500 hover:text-black transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.liveLink} target="_blank" className="p-3 bg-white/10 backdrop-blur-xl rounded-full text-white hover:bg-purple-500 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Layers size={16} className="text-cyan-400" />
                    <span className="text-xs font-mono text-gray-400 tracking-tighter uppercase">Product Design</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-[10px] font-bold text-cyan-300 bg-cyan-500/5 border border-cyan-500/20 rounded-lg backdrop-blur-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Decorative Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcase;