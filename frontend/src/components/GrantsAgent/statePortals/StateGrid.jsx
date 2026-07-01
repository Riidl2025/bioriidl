export default function StateGrid({ states }) {
  return (
    <div className="statesgrid" id="statesList">
      {states.map((s) => (
        <div key={s.name} className="statecard">
          <span className="sname">{s.name}</span>
          <a href={s.link} target="_blank" rel="noopener noreferrer">
            Portal ↗
          </a>
        </div>
      ))}
    </div>
  );
}
