import { ActionLink } from "../ui/ActionLink";

const navItems = [
  { href: "#features", label: "Funcionalidades" },
  { href: "#steps", label: "Como funciona" },
  { href: "#pricing", label: "Planos" },
  { href: "#testimonials", label: "Depoimentos" },
];

export function Header() {
  return (
    <header className="sticky z-50">
      <nav
        aria-label="Navegação principal"
        className="bg-surface px-3 py-2.5 shadow-soft ring-1 ring-black/5 sm:px-6 sm:py-3"
      >
        <div className="flex items-center justify-between gap-3">
          <a
            href="#home"
            className="font-extrabold font-heading text-base text-primary sm:text-lg"
          >
            WorkCenter
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-medium text-sm text-text-secondary transition hover:text-text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Abrir menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-lg text-text-primary ring-1 ring-black/10 transition hover:bg-background-secondary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 md:hidden"
            >
              <span aria-hidden="true">☰</span>
            </button>

            <div className="hidden items-center gap-2 sm:gap-3 md:flex">
              <a
                href="#cta"
                className="px-3 py-2 font-semibold text-primary text-sm transition hover:text-text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              >
                Login
              </a>
              <ActionLink href="#cta" className="px-4 py-2 text-xs sm:text-sm">
                Comece já
              </ActionLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
