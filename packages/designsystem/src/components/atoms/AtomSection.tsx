import React, { ReactNode, Children, cloneElement, isValidElement } from "react";

interface AtomSectionProps {
  cols?: number;
  gap?: string;
  children: ReactNode;
  className?: string;
}

export function AtomSection({ cols = 2, gap = "1rem", children, className }: AtomSectionProps) {
  return (
    <section
      className={`ds-atom-section${className ? ` ${className}` : ""}`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap,
      }}
    >
      {Children.map(children, (child) => {
        if (isValidElement(child) && child.props.colSpan) {
          return cloneElement(child, {
            style: {
              ...(child.props.style || {}),
              gridColumn: `span ${child.props.colSpan}`,
            },
          });
        }
        return child;
      })}
    </section>
  );
}
