import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <div className="relative">
        <AlertTriangle className="w-24 h-24 text-red-500 mb-8 animate-pulse" />
        <div className="absolute inset-0 bg-red-500/20 blur-3xl -z-10"></div>
      </div>
      <h1 className="text-6xl font-black text-white mb-4 tracking-tighter">404</h1>
      <h2 className="text-2xl font-bold text-neon-cyan uppercase tracking-widest mb-6">System Error: Route Not Found</h2>
      <p className="text-gray-400 max-w-md mb-10 leading-relaxed">
        The coordinate you are looking for does not exist in our digital grid. It may have been moved, deleted, or never existed in this reality.
      </p>
      <Link to="/" className="flex items-center gap-x-2 bg-white/5 border border-white/10 px-8 py-4 rounded-xl text-white font-bold hover:bg-neon-cyan hover:text-black transition-all group">
        <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
        Return to Home Base
      </Link>
    </div>
  );
};

export default NotFound;
