import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Label } from "../atoms/Label";

export interface SelectOption {
  value: string;
  label: string;
  icon?: ReactNode;
}

interface SelectMenuProps {
  label: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function SelectMenu({ label, options, value, defaultValue, onChange }: SelectMenuProps) {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue ?? options[0]?.value ?? "");
  const rootRef = useRef<HTMLDivElement>(null);
  const isControlled = value !== undefined;
  const selectedValue = isControlled ? value : internalValue;

  const selectedOption = useMemo(
    () => options.find((option) => option.value === selectedValue) ?? options[0],
    [options, selectedValue]
  );

  useEffect(() => {
    function onDocumentClick(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onDocumentClick);
    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("mousedown", onDocumentClick);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  function selectOption(nextValue: string) {
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onChange?.(nextValue);
    setOpen(false);
  }

  return (
    <div className="ds-select" ref={rootRef}>
      <Label className="ds-select__label" size="sm" tone="muted">
        {label}
      </Label>
      <button
        type="button"
        className="ds-select__head"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((state) => !state)}
      >
        <span className="ds-select__value">
          <Label size="lg">
            {selectedOption?.icon ? <span className="ds-select__icon">{selectedOption.icon}</span> : null}
            {selectedOption?.label ?? label}
          </Label>
        </span>
        <span className={`ds-select__caret ${open ? "is-open" : ""}`} aria-hidden="true">
          ⌄
        </span>
      </button>

      {open ? (
        <ul className="ds-select__list" role="listbox">
          {options.map((option) => {
            const isSelected = option.value === selectedOption?.value;
            return (
              <li key={option.value} className="ds-select__item-wrap">
                <button
                  type="button"
                  className="ds-select__item"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => selectOption(option.value)}
                >
                  <span className="ds-select__item-value">
                    <Label size="lg">
                      {option.icon ? <span className="ds-select__icon">{option.icon}</span> : null}
                      {option.label}
                    </Label>
                  </span>
                  {isSelected ? <span aria-hidden="true">✓</span> : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
