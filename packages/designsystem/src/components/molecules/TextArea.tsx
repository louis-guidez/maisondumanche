import type { ReactNode, TextareaHTMLAttributes } from "react";
import { Label } from "../atoms/Label";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: ReactNode;
  label?: string;
}

export function TextArea({ icon, label, ...props }: TextAreaProps) {
  return (
    <div className="ds-field">
      {label ? (
        <Label size="sm" tone="muted" className="ds-field__label">
          {label}
        </Label>
      ) : null}
      <label className="ds-textarea-wrap">
        {icon ? <span className="ds-textarea-icon">{icon}</span> : null}
        <textarea className="ds-textarea" {...props} />
      </label>
    </div>
  );
}
