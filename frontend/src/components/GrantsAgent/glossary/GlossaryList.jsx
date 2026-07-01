export default function GlossaryList({ items }) {
  return (
    <div className="gloss" id="glossList">
      {items.map((g) => (
        <div key={g.term} className="gcard">
          <div className="term">{g.term}</div>
          <div className="def">{g.def}</div>
        </div>
      ))}
    </div>
  );
}
