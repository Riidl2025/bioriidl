import SchemeCard from "./SchemeCard";

export default function SchemeResults({
  filteredSchemes,
  totalSchemes,
  sort,
  onSortChange,
  onOpenScheme,
}) {
  return (
    <div className="wrap">
      <div className="resbar">
        <div className="rescount" id="resCount">
          Showing <b>{filteredSchemes.length}</b> of <b>{totalSchemes}</b> schemes
        </div>
        <div className="sortgrp">
          Sort{" "}
          <select id="sortSel" value={sort} onChange={(e) => onSortChange(e.target.value)}>
            <option value="default">Playbook order</option>
            <option value="az">Name A→Z</option>
            <option value="support">Support type</option>
            <option value="ministry">Ministry</option>
          </select>
        </div>
      </div>
      <div className="grid" id="grid">
        {filteredSchemes.length === 0 ? (
          <div className="empty">
            <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <h3>No schemes match your filters</h3>
            <p>Try removing a filter or resetting.</p>
          </div>
        ) : (
          filteredSchemes.map((s) => (
            <SchemeCard key={s.name} scheme={s} onOpen={onOpenScheme} />
          ))
        )}
      </div>
    </div>
  );
}
