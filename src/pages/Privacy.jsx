import { ShieldAlert, Trash2, Database, Share2 } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4 border-b border-neon-cyan/30 pb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mb-12">Last Updated: October 2023</p>

        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              DesDev ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile applications and services. By using our applications, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* Data Safety */}
          <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-x-3 mb-6">
              <Database className="w-8 h-8 text-neon-cyan" />
              <h2 className="text-2xl font-bold text-white">Data Safety</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold">Data Collection</h3>
                <p className="text-gray-400">We may collect personal identifiers (name, email), device information, and usage data to improve our services.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold">Encryption</h3>
                <p className="text-gray-400">All data transmitted between our apps and our servers is encrypted using industry-standard <span className="text-neon-cyan">TLS/SSL protocols</span>.</p>
              </div>
            </div>
          </section>

          {/* Third Party Sharing */}
          <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-x-3 mb-6">
              <Share2 className="w-8 h-8 text-neon-cyan" />
              <h2 className="text-2xl font-bold text-white">Third-Party Sharing</h2>
            </div>
            <p className="text-gray-300 mb-4">
              We do not sell your personal data. We only share information with third-party providers (e.g., Google Analytics, Firebase) necessary for:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>App performance monitoring</li>
              <li>Crash reporting</li>
              <li>Processing In-App Purchases (via Google Play)</li>
            </ul>
          </section>

          {/* CRITICAL: Account & Data Deletion */}
          <section className="bg-neon-cyan/5 p-8 rounded-2xl border border-neon-cyan/30">
            <div className="flex items-center gap-x-3 mb-6">
              <Trash2 className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-bold text-white">Account & Data Deletion</h2>
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200 font-medium mb-4">
                You have the right to request the deletion of your account and all associated personal data at any time.
              </p>
              <h3 className="text-white font-bold text-lg mb-2 underline decoration-neon-cyan">How to Delete Your Data:</h3>
              <ol className="list-decimal list-inside text-gray-300 space-y-4">
                <li>
                  <span className="text-white font-semibold">In-App Method:</span> Go to <span className="bg-white/10 px-2 py-1 rounded">Settings > Account > Delete Account</span>. Follow the on-screen prompts to confirm.
                </li>
                <li>
                  <span className="text-white font-semibold">Manual Request:</span> Send an email to <a href="mailto:support@desdev.com" className="text-neon-cyan hover:underline">support@desdev.com</a> with the subject "Data Deletion Request". Please provide your account email address.
                </li>
              </ol>
              <div className="mt-6 p-4 bg-black/40 rounded-lg border border-white/5">
                <p className="text-sm text-gray-400 italic flex items-start gap-x-2">
                  <ShieldAlert className="w-5 h-5 flex-shrink-0 text-yellow-500" />
                  Note: Upon request, all personal information, including profile data and usage history, will be permanently purged from our servers within 30 days. Some transactional data may be retained as required by law for financial auditing.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
