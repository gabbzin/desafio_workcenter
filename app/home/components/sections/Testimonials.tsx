import { Container } from "../layout/Container";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, LogiTech",
    initials: "SC",
    quote:
      "A plataforma transformou nossa rotina de gestão. Hoje, nosso time trabalha mais alinhado e com clareza.",
  },
  {
    name: "Marcus Thorne",
    role: "CTO, NovaWare",
    initials: "MT",
    quote:
      "A visibilidade no dia a dia trouxe mais previsibilidade nas entregas e reduziu retrabalho.",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, BloomLabs",
    initials: "ER",
    quote:
      "Implementamos em dias e o resultado foi imediato. Excelente para equipes remotas.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-10 sm:py-14 lg:py-section">
      <Container>
        <header className="text-center">
          <h2 className="font-extrabold font-heading text-section-title text-text-primary tracking-tight sm:text-4xl">
            O que dizem os líderes
          </h2>
        </header>

        <div className="mt-7 grid gap-3.5 md:grid-cols-3 md:gap-6">
          {testimonials.map(item => (
            <article
              key={item.name}
              className="rounded-2xl bg-surface p-4 shadow-soft ring-1 ring-black/5 sm:p-5"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 font-bold text-primary text-xs"
                >
                  {item.initials}
                </span>
                <div>
                  <h3 className="font-semibold text-body-13 text-text-primary sm:text-sm">
                    {item.name}
                  </h3>
                  <p className="text-body-11 text-text-secondary sm:text-xs">
                    {item.role}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-body-13 text-text-secondary leading-relaxed sm:mt-4 sm:text-sm">
                “{item.quote}”
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
