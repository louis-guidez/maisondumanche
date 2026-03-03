interface RadioItemProps {
  label: string;
  checked?: boolean;
  icon?: string;
}

export function RadioItem({ label, checked = false, icon }: RadioItemProps) {
  return (
    <label className="ds-radio-item">
      <span className={`ds-radio-dot ${checked ? "is-checked" : ""}`}>{checked ? "●" : ""}</span>
      <span>
        {icon ? `${icon} ` : ""}
        {label}
      </span>
    </label>
  );
}
