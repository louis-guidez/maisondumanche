import type { ReactNode } from "react";

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
        <h3 className="ds-card__title">{title}</h3>
        {subtitle ? <p className="ds-card__subtitle">{subtitle}</p> : null}
      </header>
      {children ? <div className="ds-card__body">{children}</div> : null}
      {action ? <div className="ds-card__action">{action}</div> : null}
    </article>
  );
}
