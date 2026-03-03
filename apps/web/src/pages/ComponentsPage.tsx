import { useState } from "react";
import {
  Accordion,
  Avatar,
  Badge,
  Breadcrumbs,
  Button,
  CheckItem,
  ChipGroup,
  Divider,
  EmptyState,
  InfoCard,
  Label,
  Modal,
  NavBar,
  PageSwitch,
  PriceTag,
  ProductCard,
  ProgressBar,
  QuantityStepper,
  RadioItem,
  SectionTitle,
  SelectMenu,
  Tabs,
  TextArea,
  TextInput,
  Timeline,
  Toast,
  ToggleSwitch,
  type NavItem
} from "@maison/designsystem";

const NAV_ITEMS: NavItem[] = [
  { key: "essentiels", label: "Essentiels" },
  { key: "formulaires", label: "Formulaires" },
  { key: "catalogue", label: "Catalogue" }
];

export function ComponentsPage() {
  const [menu, setMenu] = useState("essentiels");
  const [tab, setTab] = useState("boutique");
  const [selectValue, setSelectValue] = useState("manches");
  const [chips, setChips] = useState<string[]>(["eco"]);
  const [quantity, setQuantity] = useState(2);
  const [toggle, setToggle] = useState(true);
  const [checkA, setCheckA] = useState(true);
  const [checkB, setCheckB] = useState(false);
  const [radio, setRadio] = useState("nuit");
  const [page, setPage] = useState(2);
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="ds-page">
      <section className="ds-page-head">
        <Badge variant="eco" icon="🍃">
          Bibliotheque complete
        </Badge>
        <Label as="h1" size="xl">
          Tous les composants
        </Label>
        <Label tone="muted">Un seul écran pour visualiser et tester toute la librairie.</Label>
      </section>

      <section className="ds-col">
        <Breadcrumbs
          activeKey="components"
          items={[
            { key: "home", label: "Accueil" },
            { key: "design-system", label: "Design System" },
            { key: "components", label: "Composants" }
          ]}
        />
        <NavBar items={NAV_ITEMS} activeKey={menu} onSelect={setMenu} />
        <Tabs
          items={[
            { key: "boutique", label: "Univers boutique" },
            { key: "experience", label: "Experience client" }
          ]}
          activeKey={tab}
          onChange={setTab}
        />

        <SectionTitle
          eyebrow="Collection"
          title="Labels, badges et boutons"
          subtitle="Base typographique et actions"
        />

        <InfoCard title="Typographie et actions" subtitle="Fondation visuelle">
          <div className="ds-row">
            <Label size="xl">Edition Atelier</Label>
            <Label tone="muted">Collection signature</Label>
            <Badge variant="special">Edition speciale</Badge>
            <Badge variant="eco" icon="🍃">
              Eco-friendly
            </Badge>
            <Badge variant="new">Nouveau</Badge>
            <Badge variant="sale">-30%</Badge>
            <Avatar name="Camille Martin" />
            <PriceTag before="Ancien prix 89 EUR" price="69 EUR" />
          </div>
          <div className="ds-row ds-row--compact">
            <Button>Action principale</Button>
            <Button variant="light">Action secondaire</Button>
            <Button variant="light" onClick={() => setOpenModal(true)}>
              Ouvrir modal
            </Button>
          </div>
          <div className="ds-row ds-row--compact">
            <Toast tone="info" message="Nouvelle collection disponible" />
            <Toast tone="success" message="Panier mis a jour" />
          </div>
        </InfoCard>

        <Divider label="Formulaires" />

        <div className="ds-grid">
          <InfoCard title="Composants de formulaire" subtitle="Entrée, sélection, validation">
            <div className="ds-col">
              <TextInput label="Nom" value={name} placeholder="Camille Martin" onChange={(e) => setName(e.target.value)} icon="🪵" />
              <TextArea label="Demande" rows={4} value={note} placeholder="Recherche une finition satinée avec une prise légère." onChange={(e) => setNote(e.target.value)} icon="✎" />
              <SelectMenu
                label="Categorie"
                value={selectValue}
                onChange={setSelectValue}
                options={[
                  { value: "manches", label: "Manches" },
                  { value: "poignees", label: "Poignees" },
                  { value: "accessoires", label: "Accessoires" },
                  { value: "eco", label: "Selection eco", icon: "🍃" }
                ]}
              />
              <ProgressBar value={68} label="Commande preparee" />
              <div className="ds-stack-sm" role="group" aria-label="Choix multiples">
                <CheckItem label="Bois certifie" checked={checkA} onChange={(e) => setCheckA(e.target.checked)} />
                <CheckItem label="Serie limitee" checked={checkB} onChange={(e) => setCheckB(e.target.checked)} />
              </div>
              <div className="ds-stack-sm" role="radiogroup" aria-label="Choix format">
                <RadioItem
                  label="Edition Nuit"
                  icon="🍃"
                  value="nuit"
                  name="format"
                  checked={radio === "nuit"}
                  onChange={(e) => setRadio(e.target.value)}
                />
                <RadioItem
                  label="Edition Brume"
                  value="brume"
                  name="format"
                  checked={radio === "brume"}
                  onChange={(e) => setRadio(e.target.value)}
                />
              </div>
              <div className="ds-row ds-row--compact">
                <ToggleSwitch label="Emballage lin" checked={toggle} onChange={(e) => setToggle(e.target.checked)} />
                <QuantityStepper value={quantity} onChange={setQuantity} />
              </div>
              <ChipGroup
                selected={chips}
                onChange={setChips}
                options={[
                  { value: "eco", label: "Eco", icon: "🍃" },
                  { value: "premium", label: "Premium" },
                  { value: "atelier", label: "Atelier" }
                ]}
              />
            </div>
          </InfoCard>

          <InfoCard title="Navigation et listing" subtitle="Catalogue et progression client">
            <div className="ds-col">
              <div className="ds-article-grid">
                <ProductCard
                  title="Manche Sauge"
                  description="Bois satine, toucher velours"
                  price="68 EUR"
                  badge="eco"
                />
                <ProductCard
                  title="Poignee Calcaire"
                  description="Ligne sobre, edition atelier"
                  price="54 EUR"
                  badge="new"
                />
              </div>
              <PageSwitch page={page} totalPages={5} onPageChange={setPage} />
              <Accordion
                items={[
                  {
                    key: "livraison",
                    title: "Livraison et retours",
                    content: "Livraison neutre en carbone sous 2 a 4 jours ouvrés, retours gratuits 30 jours."
                  },
                  {
                    key: "matiere",
                    title: "Origine des matieres",
                    content: "Bois certifié FSC, teintures naturelles et emballages recyclés."
                  }
                ]}
              />
              <Timeline
                items={[
                  { key: "1", title: "Commande", detail: "Validation du panier" },
                  { key: "2", title: "Atelier", detail: "Controle et finition" },
                  { key: "3", title: "Expedition", detail: "Remise transporteur" }
                ]}
              />
            </div>
          </InfoCard>
        </div>

        <EmptyState
          title="Aucune precommande active"
          description="Activez une alerte pour etre informe des prochaines editions limitees."
          actionLabel="Activer une alerte"
          onAction={() => window.alert("Alerte activee")}
        />
      </section>

      <Modal open={openModal} onClose={() => setOpenModal(false)} title="Essai composant modal">
        <Label tone="muted">Ce modal reste dans le meme univers graphique et reutilise les composants de base.</Label>
      </Modal>
    </main>
  );
}
