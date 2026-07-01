import { linkify } from "../data/helpers";

export default function PsuCardList({ items }) {
  return (
    <div className="cardlist" id="psuList">
      {items.map((p) => (
        <div key={`${p.org}-${p.initiative}`} className="lcard">
          <div className="org">
            {p.org}{" "}
            {p.type === "Regulator" ? (
              <span className="typetag reg">Regulator</span>
            ) : (
              <span className="typetag">PSU</span>
            )}
          </div>
          <div className="init">{p.initiative}</div>
          <a className="visit" href={p.link} target="_blank" rel="noopener noreferrer">
            ↗ {linkify(p.link)}
          </a>
        </div>
      ))}
    </div>
  );
}
