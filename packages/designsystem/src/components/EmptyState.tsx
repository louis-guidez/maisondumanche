import { Button } from "./Button";
import { Label } from "./Label";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="ds-empty-state">
      <span className="ds-empty-state__icon" aria-hidden="true">
        🍃
      </span>
      <Label as="h3" size="lg">
        {title}
      </Label>
      <Label tone="muted">{description}</Label>
      {actionLabel ? <Button onClick={onAction}>{actionLabel}</Button> : null}
    </div>
  );
}
