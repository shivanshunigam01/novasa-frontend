import { Link } from "@tanstack/react-router";

export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className={light ? "brand-logo text-primary-foreground" : "brand-logo text-primary"}
      aria-label="Novasa home"
    >
      <span>NOVASA</span>
      <small>gen z fits</small>
    </Link>
  );
}
