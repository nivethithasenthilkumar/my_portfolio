import React, { useEffect, useRef } from 'react';
import './FloatingBubbles.scss';

const FloatingBubbles = () => {
  const containerRef = useRef(null);
  const bubblesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const bubbleCount = 20;
    const bubbles = [];

    // Create bubbles with random properties
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 60 + 20,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1,
      };
      bubbles.push(bubble);

      const bubbleEl = document.createElement('div');
      bubbleEl.className = 'bubble';
      bubbleEl.style.width = `${bubble.size}px`;
      bubbleEl.style.height = `${bubble.size}px`;
      bubbleEl.style.left = `${bubble.x}px`;
      bubbleEl.style.top = `${bubble.y}px`;
      bubbleEl.style.opacity = bubble.opacity;
      container.appendChild(bubbleEl);
      bubblesRef.current.push(bubbleEl);
    }

    // Anti-gravity animation
    const animate = () => {
      bubbles.forEach((bubble, index) => {
        // Add slight upward force (anti-gravity)
        bubble.speedY -= 0.002;
        
        // Add some random movement
        bubble.speedX += (Math.random() - 0.5) * 0.02;
        bubble.speedY += (Math.random() - 0.5) * 0.02;
        
        // Limit speed
        bubble.speedX = Math.max(-1, Math.min(1, bubble.speedX));
        bubble.speedY = Math.max(-1, Math.min(1, bubble.speedY));
        
        // Update position
        bubble.x += bubble.speedX;
        bubble.y += bubble.speedY;
        
        // Wrap around edges
        if (bubble.x < -bubble.size) bubble.x = window.innerWidth + bubble.size;
        if (bubble.x > window.innerWidth + bubble.size) bubble.x = -bubble.size;
        if (bubble.y < -bubble.size) bubble.y = window.innerHeight + bubble.size;
        if (bubble.y > window.innerHeight + bubble.size) bubble.y = -bubble.size;
        
        // Apply position
        if (bubblesRef.current[index]) {
          bubblesRef.current[index].style.transform = `translate(${bubble.x}px, ${bubble.y}px)`;
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();

    // Handle mouse interaction
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      bubbles.forEach((bubble, index) => {
        const dx = bubble.x - mouseX;
        const dy = bubble.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          bubble.speedX += (dx / distance) * force * 0.3;
          bubble.speedY += (dy / distance) * force * 0.3;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      bubblesRef.current.forEach(el => el && el.remove());
      bubblesRef.current = [];
    };
  }, []);

  return <div ref={containerRef} className="floating-bubbles" />;
};

export default FloatingBubbles;
