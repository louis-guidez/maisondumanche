import type { ElementType, HTMLAttributes, ReactNode } from "react";

// Ajout de plus de tailles
export type LabelSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
export type LabelTone = "default" | "muted" | "contrast";

interface LabelProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  size?: LabelSize;
  tone?: LabelTone;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strike?: boolean;
}

export function Label({
  as: Component = "span",
  children,
  className,
  size = "md",
  tone = "default",
  bold,
  italic,
  underline,
  strike,
  ...props
}: LabelProps) {
  const classes = [
    "ds-label",
    `ds-label--${size}`,
    `ds-label--${tone}`,
    bold ? "ds-label--bold" : "",
    italic ? "ds-label--italic" : "",
    underline ? "ds-label--underline" : "",
    strike ? "ds-label--strike" : "",
    className ?? ""
  ].filter(Boolean).join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
