export default function SearchBar({ value, onChange }) {
  return (
    <div className="searchbar">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        id="search"
        type="text"
        placeholder="Search 69 schemes — by name, ministry, sector, eligibility…"
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
