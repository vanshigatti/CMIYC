export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white">
      
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-32">
        <span className="text-indigo-400 text-sm tracking-widest mb-4">
          WEB3 INFRASTRUCTURE
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          OnChain Event Indexer
        </h1>

        <p className="max-w-2xl text-gray-400 text-lg mb-10">
          Real-time blockchain event indexing for token transfers, wallet activity,
          and protocol signals. Get alerted the moment something important happens.
        </p>

        {/* SYSTEM STATUS (replaces Connect Wallet) */}
        <div className="bg-green-500/10 text-green-400 px-6 py-3 rounded-xl text-sm font-medium">
          🟢 Indexer Live · Telegram Alerts Active
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto mt-28 px-6 grid md:grid-cols-3 gap-8">
        <FeatureCard
          title="Live Event Feed"
          desc="Track on-chain activity in real time using a backend-powered event indexer."
        />
        <FeatureCard
          title="Automatic Alerts"
          desc="Receive instant Telegram notifications when token transfers occur."
        />
        <FeatureCard
          title="Reliable Indexing"
          desc="Production-inspired architecture using RPC providers and MongoDB."
        />
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm py-20">
        Built for Web3 Infrastructure · Hackathon Ready 🚀
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div
      className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6
                 hover:border-indigo-500/50 hover:bg-white/10 transition-all"
    >
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
