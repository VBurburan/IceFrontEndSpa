import { motion } from 'motion/react';
import { ArrowLeft, Snowflake } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg mx-auto px-6"
      >
        <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600">
          <Snowflake size={32} strokeWidth={1.5} />
        </div>

        <h1 className="text-6xl font-light text-slate-900 mb-4">404</h1>
        <h2 className="text-xl font-medium text-slate-700 mb-4">Page Not Found</h2>
        <p className="text-slate-500 font-light leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-cyan-600 transition-colors duration-200 shadow-sm flex items-center justify-center gap-2"
          >
            <ArrowLeft size={14} />
            Back to Home
          </button>
          <button
            onClick={() => navigate('/#contact')}
            className="px-8 py-3 bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest rounded-full hover:border-slate-300 hover:text-slate-900 transition-colors duration-200 shadow-sm"
          >
            Contact Us
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFoundPage;
