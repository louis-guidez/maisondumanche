import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Label } from "./Label";

type ButtonVariant = "primary" | "light";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export function Button({ children, variant = "primary", ...props }: ButtonProps) {
  return (
    <button className={`ds-button ds-button--${variant}`} {...props}>
      <Label size="lg" tone={variant === "primary" ? "contrast" : "default"}>
        {children}
      </Label>
    </button>
  );
}
