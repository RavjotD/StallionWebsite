import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create intersection observer
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add visible class to trigger animation
          entry.target.classList.add('visible');

          // Add stagger effect for child elements
          const children = entry.target.querySelectorAll('.stagger-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              (child as HTMLElement).classList.add('visible');
            }, index * 100); // 100ms delay between each child
          });

          // Unobserve after animation is triggered
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2, // Trigger when 20% of element is visible
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before element comes into view
    });

    // Get all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Observe each element
    animatedElements.forEach((element) => {
      observerRef.current?.observe(element);
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return null;
}