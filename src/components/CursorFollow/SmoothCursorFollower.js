import React, { useEffect, useRef } from 'react';
import './CursorFollower.css';

function SmoothCursorFollower() {
  const followerRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const animate = () => {
      // Smoothly interpolate towards mouse position
      currentX.current += (mouseX.current - currentX.current) * 0.15;
      currentY.current += (mouseY.current - currentY.current) * 0.15;

      if (followerRef.current) {
        followerRef.current.style.transform = 
          `translate3d(${currentX.current}px, ${currentY.current}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return <div className="cursor-follower" ref={followerRef}></div>;
}

export default SmoothCursorFollower;
