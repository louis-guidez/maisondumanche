import { Label } from "./Label";

interface PriceTagProps {
  price: string;
  before?: string;
}

export function PriceTag({ price, before }: PriceTagProps) {
  return (
    <div className="ds-price-tag">
      {before ? (
        <Label size="sm" tone="muted" className="ds-price-tag__before">
          {before}
        </Label>
      ) : null}
      <Label size="lg">{price}</Label>
    </div>
  );
}
