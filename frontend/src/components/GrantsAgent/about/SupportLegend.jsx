export default function SupportLegend() {
  return (
    <div className="block">
      <h3>⚡ Support-type legend</h3>
      <div className="legend">
        <div className="legi">
          <span className="sw" style={{ background: "var(--grant)" }} /> Grant — non-repayable,
          no equity
        </div>
        <div className="legi">
          <span className="sw" style={{ background: "var(--equity)" }} /> Equity — capital for
          a stake
        </div>
        <div className="legi">
          <span className="sw" style={{ background: "var(--loan)" }} /> Loan / Credit — debt
          or guarantee
        </div>
        <div className="legi">
          <span className="sw" style={{ background: "var(--incub)" }} /> Incubation — space,
          mentoring, ecosystem
        </div>
        <div className="legi">
          <span className="sw" style={{ background: "var(--market)" }} /> Market Access —
          procurement, export, IP
        </div>
        <div className="legi">
          <span className="sw" style={{ background: "var(--mixed)" }} /> Mixed — combination
          of the above
        </div>
      </div>
      <p style={{ marginTop: 14 }}>
        <b>Eligibility focus:</b>{" "}
        <span style={{ color: "var(--saffron-d)", fontWeight: 600 }}>Startup-Specific</span> =
        startups are the primary/sole named beneficiary ·{" "}
        <span style={{ color: "var(--gold)", fontWeight: 700 }}>Startup-Relevant</span> =
        broader eligibility (MSMEs, companies, institutions) that startups commonly use.
      </p>
    </div>
  );
}
