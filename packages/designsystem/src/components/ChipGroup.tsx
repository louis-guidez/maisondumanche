import type { ReactNode } from "react";

export interface ChipOption {
  value: string;
  label: string;
  icon?: ReactNode;
}

interface ChipGroupProps {
  options: ChipOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export function ChipGroup({ options, selected, onChange }: ChipGroupProps) {
  function toggle(value: string) {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value));
      return;
    }
    onChange([...selected, value]);
  }

  return (
    <div className="ds-chip-group" role="group" aria-label="Filtres additionnels">
      {options.map((option) => {
        const isSelected = selected.includes(option.value);
        return (
          <button
            key={option.value}
            type="button"
            className={`ds-chip ${isSelected ? "is-selected" : ""}`.trim()}
            aria-pressed={isSelected}
            onClick={() => toggle(option.value)}
          >
            {option.icon ? <span className="ds-chip__icon">{option.icon}</span> : null}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
