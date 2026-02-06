export default function EventCard({ event }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <p className="text-sm text-gray-400">
        Block #{event.blockNumber}
      </p>

      <p className="font-mono text-sm break-all">
        {event.from} → {event.to}
      </p>

      <p className="text-green-400 font-semibold">
        Value: {event.value}
      </p>

      <a
        href={`https://amoy.polygonscan.com/tx/${event.txHash}`}
        target="_blank"
        className="text-indigo-400 text-sm"
      >
        View on Polygonscan →
      </a>
    </div>
  );
}
