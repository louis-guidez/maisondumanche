import type { ReactNode } from "react";
import { Label } from "../atoms/Label";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
}

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <header className="ds-section-title">
      {eyebrow ? (
        <Label size="sm" tone="muted" className="ds-section-title__eyebrow">
          {eyebrow}
        </Label>
      ) : null}
      <Label as="h2" size="xl">
        {title}
      </Label>
      {subtitle ? <Label tone="muted">{subtitle}</Label> : null}
    </header>
  );
}
