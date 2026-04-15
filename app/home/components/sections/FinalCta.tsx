import { Container } from "../layout/Container";
import { ActionLink } from "../ui/ActionLink";

export function FinalCta() {
  return (
    <section id="cta" className="py-10 sm:py-14 lg:py-section">
      <Container>
        <div className="rounded-3xl bg-primary bg-primary-gradient px-5 py-10 text-center shadow-card sm:px-10 sm:py-14">
          <h2 className="font-extrabold font-heading text-cta-title text-white tracking-tight sm:text-5xl">
            Pronto para organizar seu
            <br className="hidden sm:block" />
            time remoto?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-body-13 text-white/80 sm:mt-4 sm:text-base">
            Comece gratuitamente hoje mesmo. Não é necessário cartão de crédito.
          </p>
          <ActionLink
            href="#"
            variant="secondary"
            className="mt-6 border-transparent bg-white font-semibold text-primary hover:bg-white/90 sm:mt-7"
          >
            Crie seu workspace já
          </ActionLink>
        </div>
      </Container>
    </section>
  );
}
