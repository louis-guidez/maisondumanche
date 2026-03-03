import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "light";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export function Button({ children, variant = "primary", ...props }: ButtonProps) {
  return (
    <button className={`ds-button ds-button--${variant}`} {...props}>
      {children}
    </button>
  );
}
