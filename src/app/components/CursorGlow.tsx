import { useEffect, useRef } from 'react';

/**
 * Renders a subtle radial gradient that follows the cursor within its parent.
 * Uses raw DOM listeners + CSS variables for zero-rerender performance.
 * Parent must have `position: relative` and `overflow: hidden`.
 */
export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const parent = el.parentElement;
    if (!parent) return;

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--glow-x', `${x}px`);
      el.style.setProperty('--glow-y', `${y}px`);
      el.style.opacity = '1';
    };

    const onLeave = () => {
      el.style.opacity = '0';
    };

    parent.addEventListener('mousemove', onMove);
    parent.addEventListener('mouseleave', onLeave);
    return () => {
      parent.removeEventListener('mousemove', onMove);
      parent.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-500"
      style={{
        background: 'radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(14, 116, 144, 0.07), transparent 60%)',
      }}
    />
  );
}
