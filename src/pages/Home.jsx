import { ExternalLink, Sparkles, Smartphone, ShieldCheck } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,#00f2ff1a_0%,#00000000_100%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <div className="flex">
            <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 transition-all">
              <span className="font-semibold text-neon-cyan">New Release</span>
              <span className="h-4 w-px bg-white/10" aria-hidden="true"></span>
              <a href="#" className="flex items-center gap-x-1">
                View Portfolio <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl animate-glow">
            DesDev: Engineering the <span className="text-neon-cyan">Future</span> of Mobile Apps.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We build high-performance, secure, and visually stunning Android applications. Our technological edge ensures your vision is delivered with precision and futuristic flair.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a href="#" className="flex items-center gap-x-2 rounded-xl bg-neon-cyan px-6 py-3 text-sm font-bold text-black shadow-neon-glow hover:bg-white transition-all transform hover:-translate-y-1">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
            </a>
            <a href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-neon-cyan transition-colors">
              Contact Sales <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <div className="relative mx-auto w-[312px] h-[641px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-black via-gray-900 to-neon-cyan/20 animate-pulse"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
              <Sparkles className="w-16 h-16 text-neon-cyan mb-4" />
              <div className="h-2 w-24 bg-neon-cyan/50 rounded-full mb-2"></div>
              <div className="h-2 w-16 bg-neon-cyan/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-24 sm:py-32 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neon-cyan/10 ring-1 ring-neon-cyan/20">
                <Smartphone className="h-6 w-6 text-neon-cyan" />
              </div>
              <dt className="text-xl font-bold text-white">Advanced UI/UX</dt>
              <dd className="text-gray-400 leading-7">Pixel-perfect designs that feel like the future. We prioritize interactive fluid animations and intuitive flows.</dd>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neon-cyan/10 ring-1 ring-neon-cyan/20">
                <Sparkles className="h-6 w-6 text-neon-cyan" />
              </div>
              <dt className="text-xl font-bold text-white">Cutting Edge Tech</dt>
              <dd className="text-gray-400 leading-7">Utilizing the latest Android frameworks and cloud architecture for hyper-scalable mobile solutions.</dd>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neon-cyan/10 ring-1 ring-neon-cyan/20">
                <ShieldCheck className="h-6 w-6 text-neon-cyan" />
              </div>
              <dt className="text-xl font-bold text-white">Military Grade Security</dt>
              <dd className="text-gray-400 leading-7">Deep integration of encryption and secure data handling to protect your users and your business.</dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
