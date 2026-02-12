import { motion } from 'motion/react';
import { ArrowLeft, Snowflake } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDocumentMeta } from '@/app/hooks/useDocumentMeta';

export function NotFoundPage() {
  const navigate = useNavigate();

  useDocumentMeta({
    title: '404 — Page Not Found | ICE',
    description: 'The page you are looking for does not exist. Return to the ICE homepage or contact us for assistance.',
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-ice-warm-gray pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg mx-auto px-6"
      >
        <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-ice-teal/10 border border-ice-teal/20 flex items-center justify-center text-ice-teal">
          <Snowflake size={32} strokeWidth={1.5} />
        </div>

        <h1 className="text-6xl font-extralight text-ice-text-primary mb-4">404</h1>
        <h2 className="text-xl font-medium text-ice-text-primary mb-4">Page Not Found</h2>
        <p className="text-ice-text-secondary font-light leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-ice-navy text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-ice-teal transition-colors duration-200 shadow-sm flex items-center justify-center gap-2"
          >
            <ArrowLeft size={14} />
            Back to Home
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-white border border-ice-border-subtle text-ice-text-primary text-xs font-bold uppercase tracking-widest rounded hover:border-ice-teal hover:text-ice-teal transition-colors duration-200 shadow-sm"
          >
            Contact Us
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFoundPage;
