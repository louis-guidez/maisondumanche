interface CheckItemProps {
  label: string;
  checked?: boolean;
}

export function CheckItem({ label, checked = false }: CheckItemProps) {
  return (
    <label className="ds-check-item">
      <span className={`ds-check-box ${checked ? "is-checked" : ""}`}>{checked ? "✓" : ""}</span>
      <span>{label}</span>
    </label>
  );
}
