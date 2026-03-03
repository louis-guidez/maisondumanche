import { useId } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { Label } from "../atoms/Label";
import { RadioControl } from "../atoms/RadioControl";

interface RadioItemProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  icon?: ReactNode;
}

export function RadioItem({ label, icon, id, className, ...inputProps }: RadioItemProps) {
  const generatedId = useId();
  const inputId = id ?? `radio-${generatedId}`;

  return (
    <label className={`ds-radio-item ${className ?? ""}`.trim()} htmlFor={inputId}>
      <input id={inputId} type="radio" className="ds-control-input" {...inputProps} />
      <RadioControl />
      <Label size="lg">
        {icon ? <span className="ds-radio-icon">{icon}</span> : null}
        {label}
      </Label>
    </label>
  );
}
