import { useEffect, useState } from "react";
import { fetchAllEvents } from "../api/events";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllEvents()
      .then((res) => setAlerts(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      
      {/* PAGE CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">

        {/* HEADER */}
        <div className="space-y-3">
          <p className="uppercase text-xs tracking-widest text-indigo-400">
            Alerts
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight">
            Telegram Alert Log
          </h1>

          <p className="text-gray-400 max-w-2xl">
            All on-chain token transfers that triggered Telegram notifications
            are logged here in real time.
          </p>
        </div>

        {/* ALERTS CONTAINER */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

          {loading ? (
            <LoadingState />
          ) : alerts.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-5">
              {alerts.map((event) => (
                <AlertCard key={event._id} event={event} />
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function AlertCard({ event }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6
                    bg-black/40 border border-white/10 rounded-xl p-6
                    hover:border-indigo-500/40 transition">

      {/* LEFT */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-gray-400">
          Token Transfer
        </p>

        <p className="font-mono text-sm text-gray-300">
          <span className="text-gray-500">From:</span> {event.from}
        </p>

        <p className="font-mono text-sm text-gray-300">
          <span className="text-gray-500">To:</span> {event.to}
        </p>

        <p className="text-lg font-semibold">
          💰 {event.value} Tokens
        </p>

        <a
          href={`https://amoy.polygonscan.com/tx/${event.txHash}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-indigo-400 text-sm hover:underline"
        >
          View on Polygonscan ↗
        </a>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-start md:items-end gap-2">
        <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
          Telegram Alert Sent
        </span>

        <p className="text-xs text-gray-400">
          Block #{event.blockNumber}
        </p>

        <p className="text-xs text-gray-500">
          {new Date(event.timestamp).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="space-y-4 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-24 bg-white/5 rounded-xl border border-white/10"
        />
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
      <p className="text-xl font-semibold text-white">
        No alerts sent yet
      </p>

      <p className="text-gray-400 max-w-md">
        The indexer is live and listening for token transfers.
        Once a transfer occurs, Telegram alerts will appear here automatically.
      </p>
    </div>
  );
}
