import type { ReactNode } from "react";

type BadgeVariant = "special" | "eco" | "new" | "sale";

const variantClass: Record<BadgeVariant, string> = {
  special: "ds-badge--special",
  eco: "ds-badge--eco",
  new: "ds-badge--new",
  sale: "ds-badge--sale"
};

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  icon?: ReactNode;
}

export function Badge({ children, variant = "special", icon }: BadgeProps) {
  return (
    <span className={`ds-badge ${variantClass[variant]}`}>
      {icon ? <span className="ds-badge__icon">{icon}</span> : null}
      {children}
    </span>
  );
}
