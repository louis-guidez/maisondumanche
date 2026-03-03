import { useId } from "react";
import type { InputHTMLAttributes } from "react";
import { Label } from "../atoms/Label";

interface CheckItemProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export function CheckItem({ label, id, className, ...inputProps }: CheckItemProps) {
  const generatedId = useId();
  const inputId = id ?? `check-${generatedId}`;

  return (
    <label className={`ds-check-item ${className ?? ""}`.trim()} htmlFor={inputId}>
      <input id={inputId} type="checkbox" className="ds-control-input" {...inputProps} />
      <span className="ds-check-box" aria-hidden="true" />
      <Label size="lg">{label}</Label>
    </label>
  );
}
