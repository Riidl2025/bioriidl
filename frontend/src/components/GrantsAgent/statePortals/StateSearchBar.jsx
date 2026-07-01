export default function StateSearchBar({ value, onChange }) {
  return (
    <input
      id="stateSearch"
      type="text"
      placeholder="Filter States / UTs…"
      style={{
        width: "100%",
        maxWidth: 360,
        fontFamily: "inherit",
        fontSize: 14,
        padding: "11px 14px",
        border: "1.5px solid var(--line)",
        borderRadius: 10,
        marginBottom: 18,
      }}
      value={value}
      onChange={onChange}
    />
  );
}
