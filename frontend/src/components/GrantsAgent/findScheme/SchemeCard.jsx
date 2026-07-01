import { SUP } from "../data/helpers";

export default function SchemeCard({ scheme, onOpen }) {
  const k = SUP[scheme.support_type]?.k || "mixed";
  const fd = scheme.group === "Startup-Specific" ? "fd-spec" : "fd-rel";
  const secchips = (scheme.sectors || []).slice(0, 3);

  return (
    <div
      className="card"
      tabIndex={0}
      role="button"
      aria-label={`${scheme.name} — ${scheme.support_type}, ${scheme.group}. Press Enter to open full details.`}
      onClick={() => onOpen(scheme)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(scheme);
        }
      }}
    >
      <div className={`focusdot ${fd}`} />
      <div className="card-top">
        <span className={`tag t-${k}`}>{scheme.support_type}</span>
        {scheme.abbr && <span className="abbr">{scheme.abbr}</span>}
      </div>
      <h3>{scheme.name}</h3>
      <div className="desc">{scheme.what_is}</div>
      <div className="card-meta">
        <div className="metaline">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" />
          </svg>
          <span>{scheme.ministry}</span>
        </div>
        <div className="metaline">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 3v18h18" />
            <path d="m7 14 4-4 3 3 5-6" />
          </svg>
          <span>{scheme.stage}</span>
        </div>
        <div className="chiprow">
          {secchips.map((x) => (
            <span key={x} className="chip">
              {x}
            </span>
          ))}
        </div>
      </div>
      <div className="card-cta">
        View full one-pager{" "}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>
    </div>
  );
}
