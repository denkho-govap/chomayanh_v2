import { useEffect, useState, ReactNode } from 'react';

export default function FadeIn({ children, delay = 0, duration = 1000 }: { children: ReactNode; delay?: number; duration?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);
  
  return (
    <div 
      className={`transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}
