import type { ReactNode, TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: ReactNode;
}

export function TextArea({ icon, ...props }: TextAreaProps) {
  return (
    <label className="ds-textarea-wrap">
      {icon ? <span className="ds-textarea-icon">{icon}</span> : null}
      <textarea className="ds-textarea" {...props} />
    </label>
  );
}
