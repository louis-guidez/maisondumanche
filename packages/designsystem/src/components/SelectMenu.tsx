interface SelectMenuProps {
  title: string;
  items: string[];
}

export function SelectMenu({ title, items }: SelectMenuProps) {
  return (
    <div className="ds-select">
      <div className="ds-select__head">
        <span>{title}</span>
        <span>⌄</span>
      </div>
      {items.map((item) => (
        <div className="ds-select__item" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}
