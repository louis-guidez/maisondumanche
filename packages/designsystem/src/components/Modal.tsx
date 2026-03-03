import type { ReactNode } from "react";
import { Button } from "./Button";
import { Label } from "./Label";

interface ModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export function Modal({ open, title, children, onClose }: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="ds-modal" role="dialog" aria-modal="true" aria-label={title}>
      <div className="ds-modal__backdrop" onClick={onClose} />
      <div className="ds-modal__content">
        <div className="ds-modal__head">
          <Label as="h3" size="lg">
            {title}
          </Label>
          <Button variant="light" onClick={onClose}>
            Fermer
          </Button>
        </div>
        <div className="ds-modal__body">{children}</div>
      </div>
    </div>
  );
}
