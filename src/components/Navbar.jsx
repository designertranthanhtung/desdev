import { Link } from 'react-router-dom';
import { Cpu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-cyber-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <Cpu className="w-8 h-8 text-neon-cyan group-hover:rotate-90 transition-transform duration-500" />
            <span className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-neon-cyan to-blue-500 bg-clip-text text-transparent">
              DESDEV
            </span>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-gray-300 hover:text-neon-cyan transition-colors px-3 py-2 text-sm font-medium uppercase tracking-widest">Home</Link>
              <Link to="/contact" className="text-gray-300 hover:text-neon-cyan transition-colors px-3 py-2 text-sm font-medium uppercase tracking-widest">Support</Link>
              <Link to="/privacy" className="text-gray-300 hover:text-neon-cyan transition-colors px-3 py-2 text-sm font-medium uppercase tracking-widest">Privacy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-neon-cyan transition-colors px-3 py-2 text-sm font-medium uppercase tracking-widest">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
