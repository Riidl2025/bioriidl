export default function Section({ icon, title, children }) {
  if (!children) return null;
  return (
    <div className="sec">
      <h4>
        {icon} {title}
      </h4>
      {children}
    </div>
  );
}
