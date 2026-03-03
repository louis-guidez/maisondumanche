import type { ReactNode } from "react";
import { Label } from "../atoms/Label";

interface InfoCardProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  action?: ReactNode;
}

export function InfoCard({ title, subtitle, children, action }: InfoCardProps) {
  return (
    <article className="ds-card">
      <header className="ds-card__head">
        <Label as="h3" className="ds-card__title" size="xl">
          {title}
        </Label>
        {subtitle ? (
          <Label className="ds-card__subtitle" tone="muted">
            {subtitle}
          </Label>
        ) : null}
      </header>
      {children ? <div className="ds-card__body">{children}</div> : null}
      {action ? <div className="ds-card__action">{action}</div> : null}
    </article>
  );
}
