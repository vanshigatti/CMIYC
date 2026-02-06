import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* BRAND */}
        <div className="text-white font-extrabold text-lg tracking-wide">
          OnChain Indexer
        </div>

        {/* LINKS */}
        <div className="flex gap-6 text-sm">
          <NavItem to="/" label="Home" />
          <NavItem to="/dashboard" label="Dashboard" />
          <NavItem to="/alerts" label="Alerts" />
        </div>
      </div>
    </nav>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `transition px-3 py-1 rounded-lg ${
          isActive
            ? "bg-indigo-600/20 text-indigo-400"
            : "text-gray-300 hover:text-white hover:bg-white/5"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
