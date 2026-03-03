import { useState } from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { TextInput } from "./TextInput";
import { TextArea } from "./TextArea";
import { SelectMenu } from "./SelectMenu";
import { CheckItem } from "./CheckItem";
import { RadioItem } from "./RadioItem";
import { ToggleSwitch } from "./ToggleSwitch";
import { QuantityStepper } from "./QuantityStepper";
import { InfoCard } from "./InfoCard";
import { ChipGroup } from "./ChipGroup";

export function DemoShowcase() {
  const [name, setName] = useState("Jean Dupont");
  const [email, setEmail] = useState("nom@email.com");
  const [message, setMessage] = useState("Je cherche une edition legere et durable.");
  const [adaptable, setAdaptable] = useState(true);
  const [durable, setDurable] = useState(true);
  const [giftWrap, setGiftWrap] = useState(false);
  const [format, setFormat] = useState("nuit-blanche");
  const [category, setCategory] = useState("manches");
  const [activeBadge, setActiveBadge] = useState("special");
  const [quantity, setQuantity] = useState(1);
  const [chips, setChips] = useState<string[]>(["artisanat"]);

  return (
    <main className="ds-page">
      <section className="ds-row ds-row--badges" aria-label="Badges filtres">
        <Badge asButton variant="special" onClick={() => setActiveBadge("special")}>Edition speciale</Badge>
        <Badge asButton variant="eco" icon="🍃" onClick={() => setActiveBadge("eco")}>Eco-friendly</Badge>
        <Badge asButton variant="new" onClick={() => setActiveBadge("new")}>Nouveau</Badge>
        <Badge asButton variant="sale" onClick={() => setActiveBadge("sale")}>-30%</Badge>
      </section>

      <section className="ds-grid">
        <div className="ds-col">
          <Button onClick={() => window.alert(`Filtre actif: ${activeBadge}`)}>Decouvrir la collection →</Button>

          <TextInput
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Votre nom"
            icon="🪵"
          />

          <TextInput
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="nom@email.com"
            icon="✉"
          />

          <TextArea
            rows={3}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Votre message"
            icon="✎"
          />

          <ChipGroup
            selected={chips}
            onChange={setChips}
            options={[
              { value: "artisanat", label: "Artisanat", icon: "🍃" },
              { value: "premium", label: "Premium" },
              { value: "rapide", label: "Livraison rapide" }
            ]}
          />

          <div className="ds-row ds-row--compact">
            <QuantityStepper value={quantity} onChange={setQuantity} />
            <ToggleSwitch label="Emballage cadeau" checked={giftWrap} onChange={(e) => setGiftWrap(e.target.checked)} />
          </div>

          <Button
            onClick={() =>
              window.alert(
                [
                  "Inscription envoyee",
                  `Nom: ${name}`,
                  `Email: ${email}`,
                  `Categorie: ${category}`,
                  `Quantite: ${quantity}`,
                  `Options: ${adaptable ? "adaptable " : ""}${durable ? "durable" : ""}`.trim(),
                  `Puce(s): ${chips.join(", ") || "aucune"}`
                ].join("\n")
              )
            }
          >
            S'inscrire
          </Button>

          <div className="ds-stack-sm" role="group" aria-label="Caracteristiques">
            <CheckItem
              label="Adaptable"
              checked={adaptable}
              onChange={(event) => setAdaptable(event.target.checked)}
            />
            <CheckItem label="Durable" checked={durable} onChange={(event) => setDurable(event.target.checked)} />
          </div>
        </div>

        <div className="ds-col">
          <SelectMenu
            label="Tous nos articles"
            value={category}
            onChange={setCategory}
            options={[
              { value: "manches", label: "Manches" },
              { value: "poignees", label: "Poignees" },
              { value: "accessoires", label: "Accessoires" },
              { value: "collection", label: "Decouvrir la collection", icon: "🍃" }
            ]}
          />

          <div className="ds-stack-sm" role="radiogroup" aria-label="Formats">
            <RadioItem
              label="Edition Nuit Blanche"
              value="nuit-blanche"
              name="format"
              icon="🍃"
              checked={format === "nuit-blanche"}
              onChange={(event) => setFormat(event.target.value)}
            />
            <RadioItem
              label="Format Telescopique"
              value="telescopique"
              name="format"
              checked={format === "telescopique"}
              onChange={(event) => setFormat(event.target.value)}
            />
          </div>

          <InfoCard
            title="Edition Nuit Blanche"
            subtitle="Collection artisanale"
            action={<Button variant="light">Voir la fiche</Button>}
          >
            <p>
              Finition douce, poids equilibre et format {format === "nuit-blanche" ? "classique" : "telescopique"}.
            </p>
          </InfoCard>
        </div>
      </section>
    </main>
  );
}
