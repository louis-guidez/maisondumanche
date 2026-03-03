import type { ElementType, HTMLAttributes, ReactNode } from "react";

type LabelSize = "sm" | "md" | "lg" | "xl";
type LabelTone = "default" | "muted" | "contrast";

interface LabelProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  size?: LabelSize;
  tone?: LabelTone;
}

export function Label({
  as: Component = "span",
  children,
  className,
  size = "md",
  tone = "default",
  ...props
}: LabelProps) {
  const classes = ["ds-label", `ds-label--${size}`, `ds-label--${tone}`, className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
