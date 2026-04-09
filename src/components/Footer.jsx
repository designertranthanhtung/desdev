import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cyber-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-neon-cyan font-bold text-lg mb-4">DESDEV</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineering the next generation of mobile experiences. Sleek, fast, and future-proof applications for Android.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-neon-cyan text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-neon-cyan text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-neon-cyan text-sm transition-colors">Contact Us</Link></li>
              <li className="text-gray-400 text-sm">Email: support@desdev.com</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} DesDev Agency. All rights reserved. Google Play and the Google Play logo are trademarks of Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
