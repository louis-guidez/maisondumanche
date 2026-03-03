import { useEffect, useState } from "react";

interface QuantityStepperProps {
  label?: string;
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
}

export function QuantityStepper({
  label = "Quantite",
  value,
  defaultValue = 1,
  min = 1,
  max = 99,
  step = 1,
  onChange
}: QuantityStepperProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);

  useEffect(() => {
    if (!isControlled) {
      setInternalValue(Math.min(max, Math.max(min, defaultValue)));
    }
  }, [defaultValue, isControlled, max, min]);

  const current = isControlled ? value : internalValue;

  function update(next: number) {
    const bounded = Math.min(max, Math.max(min, next));
    if (!isControlled) {
      setInternalValue(bounded);
    }
    onChange?.(bounded);
  }

  return (
    <div className="ds-stepper" role="group" aria-label={label}>
      <span className="ds-stepper__label">{label}</span>
      <div className="ds-stepper__controls">
        <button
          type="button"
          className="ds-stepper__btn"
          onClick={() => update(current - step)}
          disabled={current <= min}
          aria-label="Diminuer"
        >
          −
        </button>
        <output className="ds-stepper__value" aria-live="polite">
          {current}
        </output>
        <button
          type="button"
          className="ds-stepper__btn"
          onClick={() => update(current + step)}
          disabled={current >= max}
          aria-label="Augmenter"
        >
          +
        </button>
      </div>
    </div>
  );
}
