import React from 'react';
import { Heart, Code, Github, Linkedin, Mail, Facebook, FacebookIcon } from 'lucide-react';
import logo from '../public/logo.png'
import BG from '../public/BG.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <div className="text-3xl font-bold bg-gradient-to-r flex justify-center item-center from-cyan-400 to-purple-500 bg-clip-text text-transparent font-orbitron mb-4">
            <img src={logo} alt="logo" className='text-center' />
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/KGN15"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-cyan-400/20 hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/md-mashudur-rahman-233746384/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-purple-500 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:kgn.mashudur@gmail.com"
              className="p-3 rounded-full bg-gray-800 hover:bg-orange-500/20 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61583140887335"
              className="p-3 rounded-full bg-gray-800 hover:bg-orange-500/20 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Quote */}
          <div className="mb-8">
            <p className="text-gray-400 italic flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> and <Code className="w-4 h-4 text-cyan-400" /> by MR. 
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              © {currentYear} Md Mashudur Rahman (MR.). All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-140 relative z-10">
        <h1 className="fh text-[17rem] text-center font-bold">MASHHUDUR RAHMAN</h1>
      </div>
    </footer>
  );
};

export default Footer;