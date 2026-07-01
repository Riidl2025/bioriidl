import { SUP, STAGES, SUPPORT_TYPES, downloadCsv } from "../data/helpers";

export default function FilterOptions({
  filters,
  sectorOptions,
  ministryOptions,
  filteredSchemes,
  onToggleFilter,
  onFilterChange,
  onReset,
}) {
  return (
    <>
      <div className="filter-label">🔎 What kind of support do you need?</div>
      <div className="pillrow">
        {SUPPORT_TYPES.map((name) => {
          const k = SUP[name].k;
          const on = filters.support.includes(name);
          return (
            <button
              key={name}
              type="button"
              className={`pill f-${k}${on ? " on" : ""}`}
              onClick={() => onToggleFilter("support", name)}
            >
              <span className="swatch" style={{ background: `var(--${k})` }} />
              {name}
            </button>
          );
        })}
      </div>
      <div className="filter-label">📊 Stage of your startup</div>
      <div className="pillrow">
        {STAGES.map((name) => {
          const on = filters.stage.includes(name);
          return (
            <button
              key={name}
              type="button"
              className={`pill f-stage${on ? " on" : ""}`}
              onClick={() => onToggleFilter("stage", name)}
            >
              {name}
            </button>
          );
        })}
      </div>
      <div className="selrow">
        <div className="selgrp">
          <div className="filter-label">🏭 Sector</div>
          <select
            id="sectorSel"
            value={filters.sector}
            onChange={(e) => onFilterChange("sector", e.target.value)}
          >
            <option value="">All sectors</option>
            {sectorOptions.map(({ name, count }) => (
              <option key={name} value={name}>
                {name} ({count})
              </option>
            ))}
          </select>
        </div>
        <div className="selgrp">
          <div className="filter-label">🏛️ Ministry / Department</div>
          <select
            id="ministrySel"
            value={filters.ministry}
            onChange={(e) => onFilterChange("ministry", e.target.value)}
          >
            <option value="">All ministries / departments</option>
            {ministryOptions.map(({ name, count }) => (
              <option key={name} value={name}>
                {name.length > 52 ? `${name.slice(0, 52)}…` : name} ({count})
              </option>
            ))}
          </select>
        </div>
        <div className="selgrp">
          <div className="filter-label">🎯 Eligibility focus</div>
          <select
            id="focusSel"
            value={filters.focus}
            onChange={(e) => onFilterChange("focus", e.target.value)}
          >
            <option value="">All schemes</option>
            <option value="Startup-Specific">Startup-Specific (startups named)</option>
            <option value="Startup-Relevant">Startup-Relevant (broader eligibility)</option>
          </select>
        </div>
        <div className="actions">
          <button type="button" className="btn" onClick={onReset}>
            ↺ Reset
          </button>
          <button
            type="button"
            className="btn primary"
            onClick={() => downloadCsv(filteredSchemes)}
          >
            ⬇ Download CSV
          </button>
        </div>
      </div>
    </>
  );
}
