import React, { forwardRef, useRef, useEffect } from 'react';

const FloatingShapes = forwardRef(() => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const shapes = container.querySelectorAll('.floating-shape');
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.05;
        const x = (clientX - centerX) * speed;
        const y = (clientY - centerY) * speed;
        
        (shape).style.transform = `translate(${x}px, ${y}px) rotateX(${y*0.1}deg) rotateY(${x*0.1}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      <div className="floating-shape absolute top-20 left-20 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg transform rotate-45 animate-float" 
           style={{ animationDelay: '0s' }}></div>
      
      <div className="floating-shape absolute top-40 right-32 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-full animate-float-reverse" 
           style={{ animationDelay: '1s' }}></div>
      
      <div className="floating-shape absolute bottom-32 left-40 w-12 h-12 bg-gradient-to-br from-orange-500/20 to-cyan-400/20 transform rotate-12 animate-float" 
           style={{ animationDelay: '2s' }}></div>
      
      <div className="floating-shape absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-lg transform -rotate-12 animate-float-reverse" 
           style={{ animationDelay: '0.5s' }}></div>
      
      <div className="floating-shape absolute top-1/2 left-10 w-8 h-32 bg-gradient-to-b from-purple-500/30 to-transparent rounded-full animate-float" 
           style={{ animationDelay: '1.5s' }}></div>
      
      <div className="floating-shape absolute top-1/3 right-10 w-32 h-8 bg-gradient-to-r from-cyan-400/30 to-transparent rounded-full animate-float-reverse" 
           style={{ animationDelay: '2.5s' }}></div>
    </div>
  );
});

export default FloatingShapes;
