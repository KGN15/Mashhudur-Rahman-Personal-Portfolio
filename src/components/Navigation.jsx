import React, { useState, useEffect } from "react";
import { Menu, X, HomeIcon, CardSimIcon, SkullIcon, Workflow, Contact } from "lucide-react";
import logo from  '../public/logo.png'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { href: "#home", label: "Home", icon: <HomeIcon size={20} /> },
        { href: "#about", label: "About", icon: <CardSimIcon size={20} /> },
        { href: "#skills", label: "Skills", icon: <SkullIcon size={20} /> },
        { href: "#projects", label: "Projects", icon: <Workflow size={20} /> },
        { href: "#contact", label: "Contact", icon: <Contact size={20} /> },
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
    <nav
  className={`
    fixed top-4 z-50
    transition-all duration-500 ease-in-out
    rounded-3xl
    ${
      scrolled
        ? "left-1/2 -translate-x-1/2 w-[90%] sm:w-[75%] lg:w-[60%] bg-white/10 backdrop-blur-xl border border-white/20"
        : "left-4 right-4 bg-transparent"
    }
  `}
>
  <div className="px-4 sm:px-6">
    <div className="flex items-center justify-between h-16">

      {/* Logo */}
      <img src={logo} className="w-24" alt="Logo" />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className="relative group text-gray-200 hover:text-cyan-400 transition"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all" />
          </button>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-200"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
    </div>

    {/* Mobile Menu */}
    <div
      className={`
        md:hidden overflow-hidden transition-all duration-300
        ${isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"}
        bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-800
      `}
    >
      {navItems.map((item) => (
        <button
          key={item.href}
          onClick={() => {
            scrollToSection(item.href);
            setIsOpen(false);
          }}
          className="block w-full px-6 py-3 text-left text-gray-200 hover:text-cyan-400"
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>
</nav>


    );
};

export default Navigation;
