import type { InputHTMLAttributes, ReactNode } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export function TextInput({ icon, ...props }: TextInputProps) {
  return (
    <label className="ds-input-wrap">
      {icon ? <span className="ds-input-icon">{icon}</span> : null}
      <input className="ds-input" {...props} />
    </label>
  );
}
