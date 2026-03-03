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

const CONTACT_PLACEHOLDERS = {
  fullName: "Jean Dupont",
  email: "nom@email.com",
  subject: "Votre demande",
  message: "Expliquez votre besoin"
} as const;

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <main className="ds-page">

      <section className="ds-grid">
        
        <div className="ds-col">
          <Label size="3xl" bold>Contactez-nous</Label>
          <Label size="lg">Dites-nous ce que vous avez pensé de nos produits et services.</Label>
          <Label size="xl" tone="muted">Nous sommes à votre écoute pour toute question ou suggestion.</Label>

          <InfoCard title="Besoin d'aide ?">
            <p>Notre équipe support est disponible du lundi au vendredi de 9h à 18h.</p>
            <p>Contactez-nous par email à <a href="mailto:support@maison.com">support@maison.com</a></p>
          </InfoCard>
        </div>

        <div className="ds-col">
          
          <TextInput
            label="Nom complet"
            placeholder={CONTACT_PLACEHOLDERS.fullName}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            label="Email"
            type="email"
            placeholder={CONTACT_PLACEHOLDERS.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            label="Sujet"
            placeholder={CONTACT_PLACEHOLDERS.subject}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextArea
            label="Message"
            rows={5}
            placeholder={CONTACT_PLACEHOLDERS.message}
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
      </section>
    </main>
  );
}
