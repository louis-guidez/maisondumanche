import { Label } from "./Label";

export interface NavItem {
  key: string;
  label: string;
}

interface NavBarProps {
  items: NavItem[];
  activeKey: string;
  onSelect: (key: string) => void;
}

export function NavBar({ items, activeKey, onSelect }: NavBarProps) {
  return (
    <nav className="ds-navbar" aria-label="Navigation">
      {items.map((item) => {
        const isActive = item.key === activeKey;
        return (
          <button
            key={item.key}
            type="button"
            className={`ds-navbar__item ${isActive ? "is-active" : ""}`.trim()}
            onClick={() => onSelect(item.key)}
          >
            <Label size="md" tone={isActive ? "contrast" : "default"}>
              {item.label}
            </Label>
          </button>
        );
      })}
    </nav>
  );
}
