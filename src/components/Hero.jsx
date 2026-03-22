import React, { useState, useEffect } from 'react';
import { ChevronDown, Facebook, Github, Linkedin, Mail } from 'lucide-react';
import FloatingShapes from './FloatingShapes';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    'Backend Developer',
    'Server Architect',
    'Software Developer',
    'MERN Stack Developer',
    'Efficient Backend Engineer',
    'API Specialist'
  ];


  useEffect(() => {
    const type = () => {
      const current = texts[currentIndex];
      const updatedText = isDeleting
        ? current.substring(0, currentText.length - 1)
        : current.substring(0, currentText.length + 1);

      setCurrentText(updatedText);

      if (!isDeleting && updatedText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, texts]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <FloatingShapes />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-background"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="font-orbitron text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Mashhudur <br /> Rahman
            </span>
          </h1>

          <div className="text-2xl md:text-3xl mb-8 text-gray-300 min-h-[2.5rem]">
            <span className="font-inter">I'm a </span>
            <span className="text-cyan-400 font-medium border-r-2 border-cyan-400 animate-pulse">
              {currentText}
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-300">
            Passionate about building scalable and efficient backend systems,
            with a keen eye for clean and responsive frontend experiences,
            while continuously exploring modern web technologies.

          </p>

          <div className="flex justify-center space-x-6 mb-12 animate-fadeInUp animation-delay-500">
            <a href="https://github.com/KGN15" target="_blank" rel="noopener noreferrer"
              className="p-4 rounded-full bg-gray-800/50 hover:bg-cyan-400/20 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all duration-300 group">
              <Github className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
            </a>
            <a href="nkedin.com/in/md-mashudur-rahman-233746384/" target="_blank" rel="noopener noreferrer"
              className="p-4 rounded-full bg-gray-800/50 hover:bg-purple-500/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 group">
              <Linkedin className="w-6 h-6 text-purple-500 group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:mdmashudurr81@gmail.com"
              className="p-4 rounded-full bg-gray-800/50 hover:bg-orange-500/20 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all duration-300 group">
              <Mail className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61583140887335"
              className="p-4 rounded-full bg-gray-800/50 hover:bg-orange-500/20 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all duration-300 group">
              <Facebook className="w-7 h-7 text-blue-600 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce hover:text-white transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;