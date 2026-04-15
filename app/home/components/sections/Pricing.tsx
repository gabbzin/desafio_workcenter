import { Container } from "../layout/Container";
import { ActionLink } from "../ui/ActionLink";
import { SectionHeading } from "../ui/SectionHeading";

const freePlan = [
  "Até 5 usuários",
  "Gestão de tarefas básica",
  "Integrações essenciais",
  "Relatórios semanais",
];

const proPlan = [
  "Usuários ilimitados",
  "Projetos ilimitados",
  "Automações avançadas",
  "100GB de armazenamento em nuvem",
  "Suporte prioritário 24/7",
];

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-secondary-text text-sm">
      <span aria-hidden="true" className="mt-0.5 text-primary">
        ●
      </span>
      <span>{text}</span>
    </li>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-10 sm:py-14 lg:py-section">
      <Container>
        <SectionHeading
          title="Comece gratuitamente. Cresça sem limites."
          description="Escolha o plano ideal para sua equipe no momento atual e escale no seu ritmo."
        />

        <div className="mt-7 grid gap-4 md:mx-auto md:max-w-3xl md:grid-cols-2 md:gap-10 lg:gap-14">
          <article className="flex flex-col rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-black/5 sm:p-6">
            <h3 className="font-bold font-heading text-base text-primary-text sm:text-lg">
              Plano Gratuito
            </h3>
            <p className="mt-1.5 font-extrabold font-heading text-3xl text-primary-text sm:mt-2 sm:text-4xl">
              R$0
              <span className="ml-1 font-medium text-secondary-text text-sm">
                /mês
              </span>
            </p>
            <ul className="mt-4 flex-1 space-y-2 sm:mt-5">
              {freePlan.map(item => (
                <FeatureItem key={item} text={item} />
              ))}
            </ul>
            <ActionLink href="#" variant="secondary" className="mt-6 w-full">
              Iniciar plano Gratuito
            </ActionLink>
          </article>

          <article className="relative flex flex-col rounded-2xl bg-surface p-5 shadow-card ring-2 ring-primary sm:p-6">
            <span className="absolute -top-3 right-3 rounded-full bg-primary px-2.5 py-1 font-bold text-body-10 text-white uppercase tracking-wide sm:right-5 sm:px-3 sm:text-body-11">
              Mais popular
            </span>
            <h3 className="font-bold font-heading text-base text-primary-text sm:text-lg">
              Plano Pro
            </h3>
            <p className="mt-1.5 font-extrabold font-heading text-3xl text-primary-text sm:mt-2 sm:text-4xl">
              R$300
              <span className="ml-1 font-medium text-secondary-text text-sm">
                /mês
              </span>
            </p>
            <ul className="mt-4 flex-1 space-y-2 sm:mt-5">
              {proPlan.map(item => (
                <FeatureItem key={item} text={item} />
              ))}
            </ul>
            <ActionLink href="#cta" className="mt-6 w-full">
              Iniciar plano Pro
            </ActionLink>
          </article>
        </div>
      </Container>
    </section>
  );
}
