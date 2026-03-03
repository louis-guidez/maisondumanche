import { Label } from "../atoms/Label";
import "../styles.css";

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
    <header className="ds-navbar">
      <div className="ds-navbar__brand">
        <div className="ds-navbar__logo">M</div>
        <div>
          <Label size="lg" tone="default">
            La maison du manche 
          </Label>
          <span className="ds-navbar__tagline">
             L’art du détail artisanal
          </span>
        </div>
      </div>

      <nav className="ds-navbar__nav" aria-label="Navigation principale">
        {items.map((item) => {
          const isActive = item.key === activeKey;

          return (
            <button
              key={item.key}
              className={`ds-navbar__item ${isActive ? "is-active" : ""}`}
              onClick={() => onSelect(item.key)}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="ds-navbar__actions">
        <button className="ds-navbar__cta">Prendre rendez-vous</button>
      </div>
    </header>
  );
}