interface DividerProps {
  label?: string;
}

export function Divider({ label }: DividerProps) {
  return (
    <div className="ds-divider" role="separator" aria-label={label ?? "separator"}>
      <span className="ds-divider__line" />
      {label ? <span className="ds-divider__label">{label}</span> : null}
      <span className="ds-divider__line" />
    </div>
  );
}
