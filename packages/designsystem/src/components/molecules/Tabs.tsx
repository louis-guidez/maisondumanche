import { Label } from "../atoms/Label";

export interface TabItem {
  key: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
}

export function Tabs({ items, activeKey, onChange }: TabsProps) {
  return (
    <div className="ds-tabs" role="tablist" aria-label="Onglets">
      {items.map((item) => {
        const isActive = item.key === activeKey;
        return (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`ds-tabs__tab ${isActive ? "is-active" : ""}`.trim()}
            onClick={() => onChange(item.key)}
          >
            <Label size="sm" tone={isActive ? "contrast" : "default"}>
              {item.label}
            </Label>
          </button>
        );
      })}
    </div>
  );
}
