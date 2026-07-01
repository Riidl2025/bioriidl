import { useEffect } from "react";
import { SUP, linkify } from "../data/helpers";
import BulletsContent from "./BulletsContent";
import Section from "./Section";

export default function SchemeModal({ scheme, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!scheme) return null;

  const k = SUP[scheme.support_type]?.k || "mixed";
  const links = scheme.links || [];

  return (
    <>
      <div className="overlay show" onClick={onClose} />
      <div className="modal show" role="dialog" aria-modal="true" aria-labelledby="mTitle">
        <div className="sheet">
          <div className="sheet-head">
            <button type="button" className="closebtn" aria-label="Close" onClick={onClose}>
              ✕
            </button>
            <div className="badges">
              <span className={`badge t-${k}`}>{scheme.support_type}</span>
              <span className="badge" style={{ background: "rgba(255,255,255,.15)", color: "#fff" }}>
                {scheme.group}
              </span>
              {scheme.abbr && (
                <span
                  className="badge"
                  style={{ background: "rgba(202,162,74,.25)", color: "#ffe6b8" }}
                >
                  {scheme.abbr}
                </span>
              )}
            </div>
            <h2 id="mTitle">{scheme.name}</h2>
            <div className="min">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" />
              </svg>{" "}
              {scheme.ministry}
            </div>
          </div>
          <div className="sheet-body">
            <Section icon="📌" title="What is this?">
              <BulletsContent text={scheme.what_is} />
            </Section>
            <Section icon="🎯" title="Objectives">
              <BulletsContent text={scheme.objectives} />
            </Section>
            <Section icon="✅" title="Who can apply?">
              <BulletsContent text={scheme.who_can_apply} />
            </Section>
            <Section icon="💰" title="What do you get?">
              <BulletsContent text={scheme.what_you_get} />
            </Section>
            <Section icon="📈" title="Best suited for">
              {scheme.stage ? <p>{scheme.stage}</p> : null}
            </Section>
            <Section icon="🏷️" title="Sectors">
              {scheme.sectors?.length ? (
                <div className="chiprow">
                  {scheme.sectors.map((x) => (
                    <span key={x} className="chip">
                      {x}
                    </span>
                  ))}
                </div>
              ) : null}
            </Section>
            <Section icon="🚀" title="How to apply">
              <BulletsContent text={scheme.how_to_apply} />
            </Section>
            {links.length > 0 && (
              <Section icon="🔗" title="Official links">
                <div className="linklist">
                  {links.map((u) => (
                    <a
                      key={u}
                      className="linkitem"
                      href={u}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
                        <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
                      </svg>
                      {linkify(u)}
                    </a>
                  ))}
                </div>
              </Section>
            )}
            {scheme.website && (
              <div className="applybar">
                <a
                  className="apply-cta"
                  href={scheme.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit official portal →
                </a>
              </div>
            )}
            <div className="srcref">Playbook one-pager · page {scheme.page}</div>
          </div>
        </div>
      </div>
    </>
  );
}
