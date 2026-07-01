export default function BulletsContent({ text }) {
  if (!text) return null;
  const parts = text
    .split("•")
    .map((x) => x.trim())
    .filter(Boolean);
  if (parts.length > 1) {
    return (
      <ul>
        {parts.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    );
  }
  return <p>{text.replace(/^•\s*/, "")}</p>;
}
