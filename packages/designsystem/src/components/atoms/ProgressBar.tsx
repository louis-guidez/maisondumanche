import { Label } from "./Label";

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
}

export function ProgressBar({ value, max = 100, label = "Progression" }: ProgressBarProps) {
  const safe = Math.max(0, Math.min(max, value));
  const percent = Math.round((safe / max) * 100);

  return (
    <div className="ds-progress">
      <div className="ds-progress__head">
        <Label size="sm" tone="muted">
          {label}
        </Label>
        <Label size="sm">{percent}%</Label>
      </div>
      <div className="ds-progress__track" role="progressbar" aria-valuemin={0} aria-valuemax={max} aria-valuenow={safe}>
        <span className="ds-progress__fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
