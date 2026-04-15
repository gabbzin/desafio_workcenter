import { Container } from "../layout/Container";

const footerLinks = [
  { href: "#features", label: "Funcionalidades" },
  { href: "#pricing", label: "Planos" },
  { href: "#testimonials", label: "Depoimentos" },
  { href: "#", label: "Política de privacidade" },
  { href: "#", label: "Termos de uso" },
];

export function Footer() {
  return (
    <footer className="border-black/5 border-t py-6 sm:py-10">
      <Container>
        <div className="flex flex-row items-center justify-between gap-5 text-center sm:gap-6">
          <div className="space-y-5 text-start">
            <h3 className="font-extrabold font-heading text-base text-primary">
              WorkCenter
            </h3>
            <p className="text-secondary-text/80 text-xs">
              © 2026 WorkCenter. Todos os direitos reservados.
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-footer-text text-xs sm:text-sm">
              {footerLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition hover:text-primary-text focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
