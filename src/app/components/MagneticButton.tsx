import { useRef, useState, useCallback, type ReactNode, type MouseEvent } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({ children, className = '', strength = 0.3 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const handleMouse = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) { rafRef.current = null; return; }
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      setPosition({ x, y });
      rafRef.current = null;
    });
  }, [strength]);

  const handleLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setPosition({ x: 0, y: 0 });
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
