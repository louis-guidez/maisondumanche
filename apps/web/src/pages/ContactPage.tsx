import { useState } from "react";
import {
  Badge,
  Button,
  CheckItem,
  InfoCard,
  Label,
  TextArea,
  TextInput,
  ToggleSwitch,
  AtomSection
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
      <AtomSection cols={5} gap="2rem">
        <div></div>
        <div style={{ gridColumn: 'span 3' }}>
          <div>
            <InfoCard title="Contactez-nous" subtitle="">
              <Label size="lg" bold>
                Dites-nous ce que vous avez pensé de nos produits et services.
              </Label>
            </InfoCard>
          </div>
          <div className="ds-contact-form">
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
              <ToggleSwitch
                label="Recevoir la newsletter"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
              />
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
        </div>
      </AtomSection>
    </main>
  );
}
