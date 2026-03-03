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
  type NavItem,
  type TabItem
} from "@maison/designsystem";

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const LABEL_SIZES = ["sm", "md", "lg", "xl", "2xl", "3xl"] as const;
const LABEL_SHAPES = ["plain", "pill", "soft", "outline", "tag"] as const;
const FORM_PLACEHOLDERS = {
  name: "Camille Martin",
  request: "Recherche une finition satinee avec une prise legere."
} as const;

const COMPONENT_TABS: TabItem[] = [
  { key: "label", label: "Label" },
  { key: "badge", label: "Badge" },
  { key: "button", label: "Button" },
  { key: "text-input", label: "TextInput" },
  { key: "text-area", label: "TextArea" },
  { key: "select-menu", label: "SelectMenu" },
  { key: "check-item", label: "CheckItem" },
  { key: "radio-item", label: "RadioItem" },
  { key: "toggle-switch", label: "ToggleSwitch" },
  { key: "quantity-stepper", label: "QuantityStepper" },
  { key: "chip-group", label: "ChipGroup" },
  { key: "progress-bar", label: "ProgressBar" },
  { key: "price-tag", label: "PriceTag" },
  { key: "avatar", label: "Avatar" },
  { key: "breadcrumbs", label: "Breadcrumbs" },
  { key: "navbar", label: "NavBar" },
  { key: "tabs", label: "Tabs" },
  { key: "page-switch", label: "PageSwitch" },
  { key: "product-card", label: "ProductCard" },
  { key: "accordion", label: "Accordion" },
  { key: "timeline", label: "Timeline" },
  { key: "divider", label: "Divider" },
  { key: "empty-state", label: "EmptyState" },
  { key: "toast", label: "Toast" },
  { key: "modal", label: "Modal" },
  { key: "section-title", label: "SectionTitle" },
  { key: "info-card", label: "InfoCard" }
];

const NAV_ITEMS: NavItem[] = [
  { key: "all", label: "Tous" },
  { key: "manches", label: "Manches" },
  { key: "poignees", label: "Poignees" },
  { key: "accessoires", label: "Accessoires" }
];

export function ComponentsPage() {
  const [componentTab, setComponentTab] = useState("label");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [selectValue, setSelectValue] = useState("manches");
  const [checkA, setCheckA] = useState(true);
  const [checkB, setCheckB] = useState(false);
  const [radio, setRadio] = useState("nuit");
  const [toggle, setToggle] = useState(true);
  const [quantity, setQuantity] = useState(2);
  const [chips, setChips] = useState<string[]>(["eco"]);
  const [navItem, setNavItem] = useState("all");
  const [innerTab, setInnerTab] = useState("boutique");
  const [page, setPage] = useState(2);
  const [openModal, setOpenModal] = useState(false);

  function renderActiveTab() {
    if (componentTab === "label") {
      return (
        <InfoCard title="Label" subtitle="Toutes les tailles et shapes">
          <div className="ds-label-demo">
            {LABEL_SIZES.map((size) => (
              <Label key={size} size={size}>
                {LOREM}
              </Label>
            ))}
          </div>
          <div className="ds-label-demo ds-label-demo--shapes">
            {LABEL_SHAPES.map((shape) => (
              <Label key={shape} shape={shape}>
                {LOREM}
              </Label>
            ))}
          </div>
        </InfoCard>
      );
    }

    if (componentTab === "badge") {
      return (
        <InfoCard title="Badge" subtitle="Variantes visuelles">
          <div className="ds-row">
            <Badge variant="special">Edition speciale</Badge>
            <Badge variant="eco" icon="🍃">
              Eco-friendly
            </Badge>
            <Badge variant="new">Nouveau</Badge>
            <Badge variant="sale">-30%</Badge>
          </div>
        </InfoCard>
      );
    }

    if (componentTab === "button") {
      return (
        <InfoCard title="Button" subtitle="Actions principales et secondaires">
          <div className="ds-row ds-row--compact">
            <Button>Action principale</Button>
            <Button variant="light">Action secondaire</Button>
          </div>
        </InfoCard>
      );
    }

    if (componentTab === "text-input") {
      return (
        <InfoCard title="TextInput" subtitle="Champ texte">
          <TextInput
            label="Nom"
            value={name}
            placeholder={FORM_PLACEHOLDERS.name}
            onChange={(event) => setName(event.target.value)}
            icon="🪵"
          />
        </InfoCard>
      );
    }

    if (componentTab === "text-area") {
      return (
        <InfoCard title="TextArea" subtitle="Champ multiline">
          <TextArea
            label="Demande"
            rows={4}
            value={note}
            placeholder={FORM_PLACEHOLDERS.request}
            onChange={(event) => setNote(event.target.value)}
            icon="✎"
          />
        </InfoCard>
      );
    }

    if (componentTab === "select-menu") {
      return (
        <InfoCard title="SelectMenu" subtitle="Liste de choix">
          <SelectMenu
            label="Categorie"
            value={selectValue}
            onChange={setSelectValue}
            options={[
              { value: "manches", label: "Manches" },
              { value: "poignees", label: "Poignees" },
              { value: "accessoires", label: "Accessoires" },
              { value: "eco", label: "Selection eco", icon: "🍃" },
              { value: "premium", label: "Selection premium" },
              { value: "atelier", label: "Objets atelier" },
              { value: "editions", label: "Editions limitees" }
            ]}
          />
        </InfoCard>
      );
    }

    if (componentTab === "check-item") {
      return (
        <InfoCard title="CheckItem" subtitle="Cases a cocher">
          <div className="ds-stack-sm">
            <CheckItem label="Bois certifie" checked={checkA} onChange={(event) => setCheckA(event.target.checked)} />
            <CheckItem label="Serie limitee" checked={checkB} onChange={(event) => setCheckB(event.target.checked)} />
          </div>
        </InfoCard>
      );
    }

    if (componentTab === "radio-item") {
      return (
        <InfoCard title="RadioItem" subtitle="Choix unique">
          <div className="ds-stack-sm" role="radiogroup" aria-label="Choix format">
            <RadioItem
              label="Edition Nuit"
              icon="🍃"
              value="nuit"
              name="format"
              checked={radio === "nuit"}
              onChange={(event) => setRadio(event.target.value)}
            />
            <RadioItem
              label="Edition Brume"
              value="brume"
              name="format"
              checked={radio === "brume"}
              onChange={(event) => setRadio(event.target.value)}
            />
          </div>
        </InfoCard>
      );
    }

    if (componentTab === "toggle-switch") {
      return (
        <InfoCard title="ToggleSwitch" subtitle="Activation binaire">
          <ToggleSwitch label="Emballage lin" checked={toggle} onChange={(event) => setToggle(event.target.checked)} />
        </InfoCard>
      );
    }

    if (componentTab === "quantity-stepper") {
      return (
        <InfoCard title="QuantityStepper" subtitle="Controle de quantite">
          <QuantityStepper value={quantity} onChange={setQuantity} />
        </InfoCard>
      );
    }

    if (componentTab === "chip-group") {
      return (
        <InfoCard title="ChipGroup" subtitle="Filtres multi-selection">
          <ChipGroup
            selected={chips}
            onChange={setChips}
            options={[
              { value: "eco", label: "Eco", icon: "🍃" },
              { value: "premium", label: "Premium" },
              { value: "atelier", label: "Atelier" }
            ]}
          />
        </InfoCard>
      );
    }

    if (componentTab === "progress-bar") {
      return (
        <InfoCard title="ProgressBar" subtitle="Etat de progression">
          <ProgressBar value={68} label="Commande preparee" />
        </InfoCard>
      );
    }

    if (componentTab === "price-tag") {
      return (
        <InfoCard title="PriceTag" subtitle="Affichage prix">
          <PriceTag before="Ancien prix 89 EUR" price="69 EUR" />
        </InfoCard>
      );
    }

    if (componentTab === "avatar") {
      return (
        <InfoCard title="Avatar" subtitle="Identite utilisateur">
          <div className="ds-row">
            <Avatar name="Camille Martin" size="sm" />
            <Avatar name="Camille Martin" size="md" />
            <Avatar name="Camille Martin" size="lg" />
          </div>
        </InfoCard>
      );
    }

    if (componentTab === "breadcrumbs") {
      return (
        <InfoCard title="Breadcrumbs" subtitle="Navigation de contexte">
          <Breadcrumbs
            activeKey="components"
            items={[
              { key: "home", label: "Accueil" },
              { key: "design-system", label: "Design System" },
              { key: "components", label: "Composants" }
            ]}
          />
        </InfoCard>
      );
    }

    if (componentTab === "navbar") {
      return (
        <InfoCard title="NavBar" subtitle="Navigation horizontale">
          <NavBar items={NAV_ITEMS} activeKey={navItem} onSelect={setNavItem} />
        </InfoCard>
      );
    }

    if (componentTab === "tabs") {
      return (
        <InfoCard title="Tabs" subtitle="Onglets reutilisables">
          <Tabs
            items={[
              { key: "boutique", label: "Univers boutique" },
              { key: "experience", label: "Experience client" }
            ]}
            activeKey={innerTab}
            onChange={setInnerTab}
          />
        </InfoCard>
      );
    }

    if (componentTab === "page-switch") {
      return (
        <InfoCard title="PageSwitch" subtitle="Pagination">
          <PageSwitch page={page} totalPages={5} onPageChange={setPage} />
        </InfoCard>
      );
    }

    if (componentTab === "product-card") {
      return (
        <InfoCard title="ProductCard" subtitle="Carte produit">
          <div className="ds-article-grid">
            <ProductCard title="Manche Sauge" description="Bois satine, toucher velours" price="68 EUR" badge="eco" />
            <ProductCard title="Poignee Calcaire" description="Ligne sobre, edition atelier" price="54 EUR" badge="new" />
          </div>
        </InfoCard>
      );
    }

    if (componentTab === "accordion") {
      return (
        <InfoCard title="Accordion" subtitle="Contenu expandable">
          <Accordion
            items={[
              {
                key: "livraison",
                title: "Livraison et retours",
                content: "Livraison neutre en carbone sous 2 a 4 jours ouvres, retours gratuits 30 jours."
              },
              {
                key: "matiere",
                title: "Origine des matieres",
                content: "Bois certifie FSC, teintures naturelles et emballages recyclés."
              }
            ]}
          />
        </InfoCard>
      );
    }

    if (componentTab === "timeline") {
      return (
        <InfoCard title="Timeline" subtitle="Etapes d'un parcours">
          <Timeline
            items={[
              { key: "1", title: "Commande", detail: "Validation du panier" },
              { key: "2", title: "Atelier", detail: "Controle et finition" },
              { key: "3", title: "Expedition", detail: "Remise transporteur" }
            ]}
          />
        </InfoCard>
      );
    }

    if (componentTab === "divider") {
      return (
        <InfoCard title="Divider" subtitle="Separation visuelle">
          <Divider label="Nouvelle section" />
        </InfoCard>
      );
    }

    if (componentTab === "empty-state") {
      return (
        <InfoCard title="EmptyState" subtitle="Etat vide">
          <EmptyState
            title="Aucune precommande active"
            description="Activez une alerte pour etre informe des prochaines editions limitees."
            actionLabel="Activer une alerte"
            onAction={() => window.alert("Alerte activee")}
          />
        </InfoCard>
      );
    }

    if (componentTab === "toast") {
      return (
        <InfoCard title="Toast" subtitle="Feedback instantane">
          <div className="ds-row ds-row--compact">
            <Toast tone="info" message="Nouvelle collection disponible" />
            <Toast tone="success" message="Panier mis a jour" />
          </div>
        </InfoCard>
      );
    }

    if (componentTab === "modal") {
      return (
        <InfoCard title="Modal" subtitle="Fenetre de confirmation">
          <Button variant="light" onClick={() => setOpenModal(true)}>
            Ouvrir modal
          </Button>
        </InfoCard>
      );
    }

    if (componentTab === "section-title") {
      return (
        <InfoCard title="SectionTitle" subtitle="En-tete de section">
          <SectionTitle
            eyebrow="Collection"
            title="Labels, badges et boutons"
            subtitle="Base typographique et actions"
          />
        </InfoCard>
      );
    }

    return (
      <InfoCard title="InfoCard" subtitle="Conteneur de contenu">
        <Label tone="muted">Bloc de contenu premium reutilisable.</Label>
      </InfoCard>
    );
  }

  return (
    <main className="ds-page">
      <section className="ds-page-head">
        <Badge variant="eco" icon="🍃">
          Bibliotheque complete
        </Badge>
        <Label as="h1" size="xl">
          Tous les composants
        </Label>
        <Label tone="muted">Chaque composant est dans son onglet dedie.</Label>
      </section>

      <section className="ds-col">
        <Tabs items={COMPONENT_TABS} activeKey={componentTab} onChange={setComponentTab} />
        <div className="ds-components-panel">{renderActiveTab()}</div>
      </section>

      <Modal open={openModal} onClose={() => setOpenModal(false)} title="Essai composant modal">
        <Label tone="muted">Ce modal reste dans le meme univers graphique et reutilise les composants de base.</Label>
      </Modal>
    </main>
  );
}
