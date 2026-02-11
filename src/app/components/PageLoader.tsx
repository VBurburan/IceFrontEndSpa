import { motion } from 'motion/react';

export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ice-warm-white">
      <motion.img
        src="https://i.imgur.com/0uIOCcE.png"
        alt="Loading..."
        className="h-16 w-auto"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
