import { useEffect, useState } from "react";
import { fetchAllEvents } from "../api/events";
import EventCard from "../components/EventCard";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchAllEvents()
      .then((res) => setEvents(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white px-8 py-10">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* HEADER */}
        <div>
          <p className="uppercase text-xs tracking-widest text-gray-400 mb-2">
            Dashboard
          </p>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-extrabold">
                Global Event Feed
              </h1>
              <p className="text-gray-400 mt-1">
                Monitoring all indexed on-chain token transfers
              </p>
            </div>

            <StatusBadge />
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Indexed Events" value={events.length} />
          <StatCard title="Latest Block" value={events[0]?.blockNumber ?? "—"} />
          <StatCard title="Indexer Status" value="Running" />
        </div>

        {/* EVENT FEED */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Live Event Stream
          </h2>

          {loading ? (
            <LoadingState />
          ) : events.length === 0 ? (
            <EmptyTimeline />
          ) : (
            <div className="space-y-4">
              {events.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function StatusBadge() {
  return (
    <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm">
      <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
      Indexer Live · Telegram Alerts Active
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5">
      <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
        {title}
      </p>
      <p className="text-2xl font-bold">
        {value}
      </p>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="space-y-3 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-16 bg-white/5 rounded-lg border border-white/10"
        />
      ))}
    </div>
  );
}

function EmptyTimeline() {
  return (
    <div className="text-gray-400 space-y-3">
      <p className="font-semibold text-white">
        No events indexed yet
      </p>
      <p className="text-sm">
        The indexer is live and listening for on-chain activity.
      </p>
      <ul className="text-sm list-disc list-inside">
        <li>Waiting for token transfers</li>
        <li>Monitoring contract events</li>
        <li>Sending real-time Telegram alerts</li>
      </ul>
    </div>
  );
}
