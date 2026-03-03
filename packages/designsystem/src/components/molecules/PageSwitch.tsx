import { Label } from "../atoms/Label";

interface PageSwitchProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function PageSwitch({ page, totalPages, onPageChange }: PageSwitchProps) {
  return (
    <div className="ds-page-switch" role="navigation" aria-label="Pagination">
      <button
        type="button"
        className="ds-page-switch__btn"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
      >
        <Label size="sm">Precedent</Label>
      </button>

      <div className="ds-page-switch__pages">
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          const isActive = pageNumber === page;
          return (
            <button
              key={pageNumber}
              type="button"
              className={`ds-page-switch__number ${isActive ? "is-active" : ""}`.trim()}
              onClick={() => onPageChange(pageNumber)}
              aria-current={isActive ? "page" : undefined}
            >
              <Label size="sm" tone={isActive ? "contrast" : "default"}>
                {pageNumber}
              </Label>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="ds-page-switch__btn"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
      >
        <Label size="sm">Suivant</Label>
      </button>
    </div>
  );
}
