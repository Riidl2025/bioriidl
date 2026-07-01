import { STATS } from "../data/constants";

export default function HeroSection() {
  return (
    <header className="mast">
      <div className="wrap mast-inner">
        <span className="kicker">
          <span className="dot" /> Government of India · Startup Playbook · June 2026
        </span>
        <h1 className="title">Government Schemes &amp; Initiatives for Startups</h1>
        <p className="subtitle">
          An interactive finder for every Central Government scheme, fund and programme
          supporting Indian startups — search, filter by what you need, and open the full
          one-pager with eligibility and how to apply.
        </p>
        <div className="stat-row">
          {STATS.map(([value, label]) => (
            <div key={label} className="stat">
              <b>{value}</b>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
