import { TABS } from "./data/constants";

export default function TabNavigation({ activeTab, onTabChange }) {
  return (
    <nav className="tabs">
      <div className="wrap tabs-inner">
        {TABS.map(([id, icon, label, count]) => (
          <button
            key={id}
            type="button"
            className={`tab${activeTab === id ? " active" : ""}`}
            onClick={() => onTabChange(id)}
          >
            <span className="ic">{icon}</span>
            {label}
            {count !== "" && <span className="ct">{count}</span>}
          </button>
        ))}
      </div>
    </nav>
  );
}
