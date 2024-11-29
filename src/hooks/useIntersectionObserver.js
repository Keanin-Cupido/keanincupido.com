import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsIntersecting(true);
        setHasAnimated(true);
        // Optional: Unobserve after first animation
        // observer.unobserve(target);
      }
    }, {
      threshold: 0.1,
      ...options
    });

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [hasAnimated, options]);

  return { targetRef, isIntersecting };
}
