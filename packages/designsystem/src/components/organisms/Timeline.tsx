import { Label } from "../atoms/Label";

export interface TimelineItem {
  key: string;
  title: string;
  detail: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="ds-timeline">
      {items.map((item) => (
        <li key={item.key} className="ds-timeline__item">
          <span className="ds-timeline__dot" aria-hidden="true" />
          <div className="ds-timeline__content">
            <Label size="md">{item.title}</Label>
            <Label size="sm" tone="muted">
              {item.detail}
            </Label>
          </div>
        </li>
      ))}
    </ol>
  );
}
