import { Label } from "./Label";

interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

export function Avatar({ name, size = "md" }: AvatarProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <div className={`ds-avatar ds-avatar--${size}`.trim()} aria-label={name} title={name}>
      <Label size="sm" tone="contrast">
        {initials}
      </Label>
    </div>
  );
}
