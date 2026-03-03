import { Badge } from "./Badge";
import { Button } from "./Button";
import { Label } from "./Label";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  badge?: "special" | "eco" | "new" | "sale";
}

export function ProductCard({ title, description, price, badge = "new" }: ProductCardProps) {
  return (
    <article className="ds-product-card">
      <div className="ds-product-card__image" aria-hidden="true" />
      <div className="ds-product-card__body">
        <Badge variant={badge}>{badge === "sale" ? "-30%" : badge === "eco" ? "Eco-friendly" : "Nouveau"}</Badge>
        <Label as="h3" size="lg">
          {title}
        </Label>
        <Label tone="muted">{description}</Label>
        <div className="ds-product-card__footer">
          <Label size="lg">{price}</Label>
          <Button variant="light">Ajouter</Button>
        </div>
      </div>
    </article>
  );
}
