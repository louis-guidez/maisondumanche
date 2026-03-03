import type { InputHTMLAttributes, ReactNode } from "react";
import { Label } from "./Label";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  label?: string;
}

export function TextInput({ icon, label, ...props }: TextInputProps) {
  return (
    <div className="ds-field">
      {label ? (
        <Label size="sm" tone="muted" className="ds-field__label">
          {label}
        </Label>
      ) : null}
      <label className="ds-input-wrap">
        {icon ? <span className="ds-input-icon">{icon}</span> : null}
        <input className="ds-input" {...props} />
      </label>
    </div>
  );
}
