import { useState } from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { TextInput } from "./TextInput";
import { SelectMenu } from "./SelectMenu";
import { CheckItem } from "./CheckItem";
import { RadioItem } from "./RadioItem";

export function DemoShowcase() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [adaptable, setAdaptable] = useState(true);
  const [durable, setDurable] = useState(true);
  const [format, setFormat] = useState("nuit-blanche");
  const [category, setCategory] = useState("manches");
  const [activeBadge, setActiveBadge] = useState("special");

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

          <Button
            onClick={() =>
              window.alert(
                `Inscription envoyee\nNom: ${name}\nEmail: ${email}\nOptions: ${adaptable ? "adaptable" : ""} ${
                  durable ? "durable" : ""
                }`.trim()
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

          <div className="ds-stack-sm ds-stack-offset" role="radiogroup" aria-label="Formats">
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
        </div>
      </section>
    </main>
  );
}
