import React, { useEffect, useState } from 'react';

const ParallaxBackground: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div 
        className="parallax-stars" 
        style={{ 
          transform: `translateY(${scrollPosition * 0.2}px) translateX(${mousePosition.x * -20}px)`,
          opacity: 0.5
        }}
      ></div>
      <div 
        className="parallax-stars secondary" 
        style={{ 
          transform: `translateY(${scrollPosition * 0.1}px) translateX(${mousePosition.x * -10}px)`,
          opacity: 0.3
        }}
      ></div>
      <div 
        className="parallax-grid" 
        style={{ 
          transform: `translateY(${scrollPosition * 0.15}px) translateX(${mousePosition.x * -15}px)`,
          opacity: 0.15
        }}
      ></div>
      <div 
        className="parallax-glow" 
        style={{ 
          transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
          opacity: 0.4
        }}
      ></div>
      <div 
        className="parallax-deep-bg" 
        style={{ 
          transform: `translate(${mousePosition.x * -5}px, ${mousePosition.y * -5}px)`,
        }}
      ></div>
    </div>
  );
};

export default ParallaxBackground;
