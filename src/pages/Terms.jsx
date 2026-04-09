import { Scale, CreditCard, UserCheck, RefreshCcw } from 'lucide-react';

const Terms = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4 border-b border-neon-cyan/30 pb-4">
          Terms of Service
        </h1>
        <p className="text-gray-400 mb-12 italic">Version 2.0 - Effective Date: Oct 2023</p>

        <div className="space-y-12">
          {/* APP ACCESS */}
          <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-x-3 mb-6">
              <UserCheck className="w-8 h-8 text-neon-cyan" />
              <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">1. App Access (AAA)</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                By accessing our applications, you warrant that you are responsible for maintaining the confidentiality of your login credentials. You are solely responsible for all activities that occur under your account.
              </p>
              <p className="bg-red-500/10 border-l-2 border-red-500 p-4 font-semibold text-red-200">
                TERMINATION: DesDev reserves the absolute, unilateral right to suspend or terminate any user account, without prior notice, for any violation of these terms, including but not limited to fraudulent activity or policy breaches.
              </p>
            </div>
          </section>

          {/* IN-APP PURCHASES */}
          <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-x-3 mb-6">
              <CreditCard className="w-8 h-8 text-neon-cyan" />
              <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">2. In-App Purchases (IAP)</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <p>
                <span className="text-white font-bold underline decoration-neon-cyan">Licensing:</span> Any "Virtual Items" (e.g., currency, power-ups, premium features) are <span className="text-neon-cyan">licensed</span>, not sold. These items have no real-world monetary value and cannot be exchanged for currency.
              </p>
              <p>
                <span className="text-white font-bold underline decoration-neon-cyan">Payments:</span> All payments and refunds are processed exclusively via the <span className="text-white font-semibold">Google Play Billing System</span>. DesDev does not directly handle your financial information.
              </p>
              <p className="text-sm border border-white/20 p-4 italic text-gray-400">
                REFUND POLICY: All sales are final. Refunds are subject to Google Play’s official refund policies. If you experience an error, contact our support team immediately.
              </p>
            </div>
          </section>

          {/* SUBSCRIPTIONS */}
          <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-x-3 mb-6">
              <RefreshCcw className="w-8 h-8 text-neon-cyan" />
              <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">3. Subscriptions</h2>
            </div>
            <div className="text-gray-300 space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li><span className="text-white font-semibold">Auto-Renewal:</span> Subscriptions automatically renew unless cancelled at least <span className="text-neon-cyan">24 hours</span> before the end of the current period.</li>
                <li><span className="text-white font-semibold">Cancellation:</span> Users must manage and cancel subscriptions through the <span className="bg-white/10 px-2 py-1 rounded">Google Play Store App > Subscriptions</span> settings.</li>
                <li><span className="text-red-400 font-bold underline">DELETING THE APP DOES NOT CANCEL YOUR SUBSCRIPTION.</span></li>
              </ul>
            </div>
          </section>

          {/* GOVERNING LAW */}
          <section>
            <div className="flex items-center gap-x-3 mb-6">
              <Scale className="w-8 h-8 text-neon-cyan" />
              <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">4. Governing Law</h2>
            </div>
            <p className="text-gray-300">
              These terms are governed by the laws of your jurisdiction and international intellectual property treaties. Any disputes will be handled under the exclusive jurisdiction of the courts designated by DesDev Agency.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
