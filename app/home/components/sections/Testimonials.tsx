import { Container } from "../layout/Container";

interface Testimonial {
  name: string;
  role: string;
  image?: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CEO, LogiTech",
    image: "./sarah-chen.png",
    
    quote:
      "A plataforma transformou nossa rotina de gestão. Hoje, nosso time trabalha mais alinhado e com clareza.",
  },
  {
    name: "Marcus Thorne",
    role: "CTO, NovaWare",
    image: "./marcus-thorne.png",
    quote:
      "A visibilidade no dia a dia trouxe mais previsibilidade nas entregas e reduziu retrabalho.",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, BloomLabs",
    image: "./elena-rodriguez.png",
    quote:
      "Implementamos em dias e o resultado foi imediato. Excelente para equipes remotas.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-10 sm:py-14 lg:py-section">
      <Container>
        <header className="text-center">
          <h2 className="font-extrabold font-heading text-primary-text text-section-title tracking-tight sm:text-4xl">
            O que dizem os líderes
          </h2>
        </header>

        <div className="mt-7 grid gap-4 md:grid-cols-3 md:gap-8">
          {testimonials.map(item => (
            <article
              key={item.name}
              className="rounded-2xl bg-surface p-4 shadow-soft ring-1 ring-black/5 sm:p-5"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-body-13 text-primary-text sm:text-sm">
                    {item.name}
                  </h3>
                  <p className="text-body-11 text-secondary-text sm:text-xs">
                    {item.role}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-body-13 text-secondary-text leading-relaxed sm:mt-4 sm:text-sm">
                “{item.quote}”
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
