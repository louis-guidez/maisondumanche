import { useId } from "react";
import type { InputHTMLAttributes } from "react";
import { Label } from "./Label";

interface ToggleSwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export function ToggleSwitch({ label, id, className, ...props }: ToggleSwitchProps) {
  const generatedId = useId();
  const inputId = id ?? `toggle-${generatedId}`;

  return (
    <label className={`ds-toggle ${className ?? ""}`.trim()} htmlFor={inputId}>
      <input id={inputId} type="checkbox" className="ds-control-input ds-toggle__input" {...props} />
      <span className="ds-toggle__track" aria-hidden="true">
        <span className="ds-toggle__thumb" />
      </span>
      <Label>{label}</Label>
    </label>
  );
}
