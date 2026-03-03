import { Label } from "./Label";

interface ToastProps {
  message: string;
  tone?: "info" | "success";
}

export function Toast({ message, tone = "info" }: ToastProps) {
  return (
    <div className={`ds-toast ds-toast--${tone}`.trim()} role="status" aria-live="polite">
      <span aria-hidden="true">{tone === "success" ? "✓" : "i"}</span>
      <Label size="sm" tone="contrast">
        {message}
      </Label>
    </div>
  );
}
