import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Label } from "./Label";

type BadgeVariant = "special" | "eco" | "new" | "sale";

const variantClass: Record<BadgeVariant, string> = {
  special: "ds-badge--special",
  eco: "ds-badge--eco",
  new: "ds-badge--new",
  sale: "ds-badge--sale"
};

interface BadgeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  icon?: ReactNode;
  asButton?: boolean;
}

export function Badge({ children, variant = "special", icon, asButton = false, ...buttonProps }: BadgeProps) {
  const className = ["ds-badge", variantClass[variant], asButton ? "ds-badge--interactive" : ""]
    .filter(Boolean)
    .join(" ");

  if (asButton) {
    return (
      <button type="button" className={className} {...buttonProps}>
        {icon ? <span className="ds-badge__icon">{icon}</span> : null}
        <Label tone={variant === "special" ? "default" : "contrast"}>{children}</Label>
      </button>
    );
  }

  return (
    <span className={className}>
      {icon ? <span className="ds-badge__icon">{icon}</span> : null}
      <Label tone={variant === "special" ? "default" : "contrast"}>{children}</Label>
    </span>
  );
}
