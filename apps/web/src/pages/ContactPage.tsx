import { useState } from "react";
import {
  Badge,
  Button,
  CheckItem,
  InfoCard,
  Label,
  TextArea,
  TextInput,
  ToggleSwitch
} from "@maison/designsystem";

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <main className="ds-page">
      <section className="ds-page-head">
        <Badge variant="eco" icon="🍃">
          Reponse sous 24h
        </Badge>
        <Label as="h1" size="xl">
          Contactez notre atelier
        </Label>
        <Label tone="muted">Une question sur une edition, un format ou un accessoire ?</Label>
      </section>

      <section className="ds-grid">
        <div className="ds-col">
          <TextInput label="Nom complet" placeholder="Jean Dupont" value={name} onChange={(e) => setName(e.target.value)} />
          <TextInput
            label="Email"
            type="email"
            placeholder="nom@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput label="Sujet" placeholder="Votre demande" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <TextArea
            label="Message"
            rows={5}
            placeholder="Expliquez votre besoin"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="ds-stack-sm">
            <ToggleSwitch label="Recevoir la newsletter" checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} />
            <CheckItem
              label="J'accepte les conditions"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
          </div>

          <Button
            disabled={!termsAccepted || !name || !email || !message}
            onClick={() => window.alert("Message envoye")}
          >
            Envoyer la demande
          </Button>
        </div>

        <div className="ds-col">
          <InfoCard title="Service client" subtitle="Lundi au vendredi">
            <Label>09:00 - 18:00</Label>
          </InfoCard>
          <InfoCard title="Atelier Paris" subtitle="Rue des Artisans">
            <Label tone="muted">Essais sur rendez-vous et conseils personnalises.</Label>
          </InfoCard>
        </div>
      </section>
    </main>
  );
}
