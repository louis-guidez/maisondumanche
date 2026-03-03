import { Label } from "./Label";

export interface BreadcrumbItem {
  key: string;
  label: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  activeKey: string;
  onSelect?: (key: string) => void;
}

export function Breadcrumbs({ items, activeKey, onSelect }: BreadcrumbsProps) {
  return (
    <nav className="ds-breadcrumbs" aria-label="Fil d'ariane">
      {items.map((item, index) => {
        const isActive = item.key === activeKey;
        return (
          <span key={item.key} className="ds-breadcrumbs__item">
            <button
              type="button"
              className={`ds-breadcrumbs__btn ${isActive ? "is-active" : ""}`.trim()}
              onClick={() => onSelect?.(item.key)}
              aria-current={isActive ? "page" : undefined}
            >
              <Label size="sm" tone={isActive ? "default" : "muted"}>
                {item.label}
              </Label>
            </button>
            {index < items.length - 1 ? <span className="ds-breadcrumbs__sep">/</span> : null}
          </span>
        );
      })}
    </nav>
  );
}
