import { CirclePlayIcon } from "lucide-react";
import { Container } from "../layout/Container";
import { ActionLink } from "../ui/ActionLink";

export function Hero() {
  return (
    <section id="home" className="py-6 sm:py-10 lg:py-14">
      <Container>
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-14">
          <div>
            <h1 className="font-extrabold font-heading text-hero-mobile text-text-primary tracking-tight sm:text-5xl sm:leading-tight lg:text-hero-desktop">
              Gerencie seu
              <br />
              time remoto <span className="text-primary">sem</span>
              <br />
              <span className="text-primary">complicação</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm text-text-secondary leading-relaxed sm:mt-5 sm:text-base">
              Organize tarefas, acompanhe o progresso e colabore em um só lugar.
              Projetado para produtividade, automático e com uma experiência que
              cresce com o seu time.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:items-center sm:gap-3">
              <ActionLink
                href="#pricing"
                ariaLabel="Começar gratuitamente"
                className="w-full sm:w-auto"
              >
                Comece gratuitamente
              </ActionLink>

              <ActionLink
                href="#"
                variant="secondary"
                ariaLabel="Assistir demonstração"
                className="flex w-full items-center gap-2 sm:w-auto"
              >
                <CirclePlayIcon />
                Ver demonstração
              </ActionLink>
            </div>
          </div>

          <div className="hidden overflow-hidden rounded-2xl bg-surface shadow-card ring-1 ring-black/5 lg:block">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Equipe colaborando em uma mesa"
              className="h-full min-h-65 w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
