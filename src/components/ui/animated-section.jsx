import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

export function AnimatedSection({ 
  children, 
  className,
  animation = 'fade-up' // fade-up, fade-down, fade-left, fade-right
}) {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const animations = {
    'fade-up': 'translate-y-10 opacity-0',
    'fade-down': '-translate-y-10 opacity-0',
    'fade-left': 'translate-x-10 opacity-0',
    'fade-right': '-translate-x-10 opacity-0',
  };

  return (
    <div
      ref={targetRef}
      className={cn(
        'transition-all duration-1000 ease-out',
        isIntersecting ? '' : animations[animation],
        className
      )}
    >
      {children}
    </div>
  );
}
