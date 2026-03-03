import { Badge } from "./Badge";
import { Button } from "./Button";
import { TextInput } from "./TextInput";
import { SelectMenu } from "./SelectMenu";
import { CheckItem } from "./CheckItem";
import { RadioItem } from "./RadioItem";

export function DemoShowcase() {
  return (
    <main className="ds-page">
      <section className="ds-row ds-row--badges">
        <Badge variant="special">Edition speciale</Badge>
        <Badge variant="eco" icon="🍃">
          Eco-friendly
        </Badge>
        <Badge variant="new">Nouveau</Badge>
        <Badge variant="sale">-30%</Badge>
      </section>

      <section className="ds-grid">
        <div className="ds-col">
          <Button>Decouvrir la collection →</Button>
          <TextInput placeholder="Jean Dupont" icon="🪵" />
          <TextInput placeholder="nom@email.com" icon="✉" />
          <Button>S'inscrire</Button>

          <div className="ds-stack-sm">
            <CheckItem label="Adaptable" checked />
            <CheckItem label="Durable" checked />
          </div>
        </div>

        <div className="ds-col">
          <SelectMenu
            title="Tous nos articles"
            items={["Manches", "Poignees", "Accessoires", "🍃 Decouvrir la collection"]}
          />

          <div className="ds-stack-sm ds-stack-offset">
            <RadioItem label="Edition Nuit Blanche" checked icon="🍃" />
            <RadioItem label="Format Telescopique" />
          </div>
        </div>
      </section>
    </main>
  );
}
