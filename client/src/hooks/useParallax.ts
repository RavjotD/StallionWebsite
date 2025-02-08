import { useEffect, useState } from 'react';

export function useParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateParallax = (speed = 0.5) => {
    return {
      transform: `translateY(${scrollY * speed}px)`,
    };
  };

  return { scrollY, calculateParallax };
}
