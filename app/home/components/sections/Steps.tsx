import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";

const steps = [
  {
    title: "Crie Workspaces",
    description:
      "Configure seus espaços digitais em segundos, convide sua equipe e organize processos em um só hub.",
  },
  {
    title: "Organize tarefas",
    description:
      "Arraste, edite e mova tarefas no fluxo ideal do seu time, com atualizações em tempo real.",
  },
  {
    title: "Acompanhe o progresso",
    description:
      "Visualize entregas, prazos e indicadores com painéis que facilitam decisões rápidas.",
  },
];

export function Steps() {
  return (
    <section id="steps" className="py-10 sm:py-14 lg:py-section">
      <Container>
        <SectionHeading title="Fácil de começar. Poderoso de usar." />

        <ol className="mt-7 grid gap-5 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl p-1.5 sm:p-2">
              <p className="font-extrabold font-heading text-4xl text-primary/60 leading-none sm:text-5xl">
                {index + 1}
              </p>
              <h3 className="mt-2.5 font-bold font-heading text-base text-primary-text sm:mt-3 sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-2 text-body-13 text-secondary-text leading-relaxed sm:text-sm">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
