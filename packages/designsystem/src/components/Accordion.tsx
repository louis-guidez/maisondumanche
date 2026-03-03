import { useState } from "react";
import { Label } from "./Label";

export interface AccordionItem {
  key: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenKey?: string;
}

export function Accordion({ items, defaultOpenKey }: AccordionProps) {
  const [openKey, setOpenKey] = useState(defaultOpenKey ?? items[0]?.key ?? "");

  return (
    <div className="ds-accordion">
      {items.map((item) => {
        const isOpen = openKey === item.key;
        return (
          <section className="ds-accordion__item" key={item.key}>
            <button
              type="button"
              className="ds-accordion__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenKey((prev) => (prev === item.key ? "" : item.key))}
            >
              <Label size="md">{item.title}</Label>
              <span className={`ds-accordion__caret ${isOpen ? "is-open" : ""}`.trim()}>⌄</span>
            </button>
            {isOpen ? (
              <div className="ds-accordion__panel">
                <Label tone="muted">{item.content}</Label>
              </div>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
