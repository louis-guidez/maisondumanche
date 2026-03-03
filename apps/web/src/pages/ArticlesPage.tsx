import { useMemo, useState } from "react";
import {
  ChipGroup,
  Label,
  NavBar,
  PageSwitch,
  ProductCard,
  SelectMenu,
  type NavItem
} from "@maison/designsystem";

const NAV_ITEMS: NavItem[] = [
  { key: "all", label: "Tous" },
  { key: "manches", label: "Manches" },
  { key: "poignees", label: "Poignees" },
  { key: "accessoires", label: "Accessoires" }
];

const ARTICLES = [
  { id: 1, category: "manches", title: "Manche Cerisier", description: "Finition mate artisanale.", price: "59 EUR", badge: "new" as const },
  { id: 2, category: "poignees", title: "Poignee Lin", description: "Prise douce et stable.", price: "42 EUR", badge: "eco" as const },
  { id: 3, category: "accessoires", title: "Etui Voyage", description: "Protection textile premium.", price: "29 EUR", badge: "special" as const },
  { id: 4, category: "manches", title: "Manche Noyer", description: "Edition robuste et equilibree.", price: "64 EUR", badge: "sale" as const },
  { id: 5, category: "poignees", title: "Poignee Dune", description: "Forme ergonomique.", price: "39 EUR", badge: "new" as const },
  { id: 6, category: "accessoires", title: "Huile Entretien", description: "Soin naturel du bois.", price: "18 EUR", badge: "eco" as const },
  { id: 7, category: "manches", title: "Manche Blanc", description: "Edition Nuit Blanche.", price: "72 EUR", badge: "special" as const },
  { id: 8, category: "poignees", title: "Poignee Brume", description: "Ligne sobre et legere.", price: "47 EUR", badge: "sale" as const }
];
const POPULARITY_RANK: Record<number, number> = {
  7: 1,
  1: 2,
  2: 3,
  4: 4,
  8: 5,
  5: 6,
  3: 7,
  6: 8
};

const ITEMS_PER_PAGE = 4;

export function ArticlesPage() {
  const [section, setSection] = useState("all");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<string[]>([]);

  const filteredArticles = useMemo(() => {
    let result = ARTICLES.filter((article) => (section === "all" ? true : article.category === section));

    if (filters.includes("eco")) {
      result = result.filter((article) => article.badge === "eco");
    }

    if (sort === "price-asc") {
      result = [...result].sort((a, b) => Number(a.price.split(" ")[0]) - Number(b.price.split(" ")[0]));
    }

    if (sort === "price-desc") {
      result = [...result].sort((a, b) => Number(b.price.split(" ")[0]) - Number(a.price.split(" ")[0]));
    }

    if (sort === "name-asc") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sort === "name-desc") {
      result = [...result].sort((a, b) => b.title.localeCompare(a.title));
    }

    if (sort === "popular") {
      result = [...result].sort((a, b) => (POPULARITY_RANK[a.id] ?? 999) - (POPULARITY_RANK[b.id] ?? 999));
    }

    return result;
  }, [filters, section, sort]);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / ITEMS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const paginated = filteredArticles.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

  return (
    <main className="ds-page">
      <section className="ds-page-head">
        <Label as="h1" size="xl">
          Nos articles
        </Label>
        <Label tone="muted">Collection complete avec filtres, tri et pagination.</Label>
      </section>

      <section className="ds-col">
        <NavBar
          items={NAV_ITEMS}
          activeKey={section}
          onSelect={(next) => {
            setSection(next);
            setPage(1);
          }}
        />

        <div className="ds-row ds-row--compact">
          <SelectMenu
            label="Tri"
            value={sort}
            onChange={(next) => {
              setSort(next);
              setPage(1);
            }}
            options={[
              { value: "newest", label: "Plus recents" },
              { value: "popular", label: "Plus populaires" },
              { value: "price-asc", label: "Prix croissant" },
              { value: "price-desc", label: "Prix decroissant" },
              { value: "name-asc", label: "Nom A-Z" },
              { value: "name-desc", label: "Nom Z-A" }
            ]}
          />

          <ChipGroup
            selected={filters}
            onChange={(next) => {
              setFilters(next);
              setPage(1);
            }}
            options={[{ value: "eco", label: "Eco-friendly", icon: "🍃" }]}
          />
        </div>

        <div className="ds-article-grid">
          {paginated.map((article) => (
            <ProductCard
              key={article.id}
              title={article.title}
              description={article.description}
              price={article.price}
              badge={article.badge}
            />
          ))}
        </div>

        <PageSwitch page={safePage} totalPages={totalPages} onPageChange={setPage} />
      </section>
    </main>
  );
}
