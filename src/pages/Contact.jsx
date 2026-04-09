import { Mail, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Support ticket created. Our team will contact you shortly.');
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-neon-cyan uppercase tracking-widest">Support Center</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Support & Disputes</p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            For all inquiries regarding In-App Purchases (IAP), technical issues, or account management.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/50 transition-colors">
              <Mail className="w-10 h-10 text-neon-cyan mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Direct Support</h3>
              <p className="text-gray-400 mb-4 text-sm">Best for complex technical issues and IAP refund inquiries.</p>
              <a href="mailto:support@desdev.com" className="text-neon-cyan font-semibold hover:underline">support@desdev.com</a>
            </div>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <Clock className="w-10 h-10 text-neon-cyan mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Response Time</h3>
              <p className="text-gray-400 text-sm">We typically respond within <span className="text-white font-bold">24-48 hours</span> on business days.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-x-2 mb-8">
              <MessageSquare className="w-6 h-6 text-neon-cyan" />
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">Open Support Ticket</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input type="text" required className="w-full bg-cyber-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-neon-cyan" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input type="email" required className="w-full bg-cyber-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-neon-cyan" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Issue Category</label>
                <select className="w-full bg-cyber-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-neon-cyan">
                  <option>In-App Purchase Issue</option>
                  <option>Account Deletion Request</option>
                  <option>Technical Bug</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Detailed Message</label>
                <textarea rows="4" required className="w-full bg-cyber-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-neon-cyan"></textarea>
              </div>
              <button type="submit" className="w-full bg-neon-cyan py-4 rounded-lg text-black font-bold uppercase tracking-widest hover:bg-white transition-all shadow-neon-glow">
                Submit Ticket
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
