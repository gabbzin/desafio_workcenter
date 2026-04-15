import {
  AsteriskIcon,
  CircleCheckBigIcon,
  type LucideIcon,
  MoveUpRightIcon,
} from "lucide-react";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Tarefas inteligentes",
    description:
      "Crie e organize tarefas com status claros, responsáveis e prioridade para manter o ritmo da equipe.",
    icon: CircleCheckBigIcon,
  },
  {
    title: "Visibilidade em tempo real",
    description:
      "Acompanhe progresso, bloqueios e entregas com uma visão única para decisões rápidas.",
    icon: MoveUpRightIcon,
  },
  {
    title: "Integrações nativas",
    description:
      "Conecte com ferramentas do seu fluxo e centralize o trabalho sem trocar de contexto.",
    icon: AsteriskIcon,
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;

  return (
    <article className="rounded-2xl bg-surface p-5 shadow-soft ring-1 ring-black/5 sm:p-6">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-3 font-bold font-heading text-base text-primary-text sm:mt-4 sm:text-lg">
        {feature.title}
      </h3>
      <p className="mt-2 text-body-13 text-secondary-text leading-relaxed sm:text-sm">
        {feature.description}
      </p>
    </article>
  );
}

export function Features() {
  return (
    <section id="features" className="py-10 sm:py-14 lg:py-section">
      <Container>
        <SectionHeading
          title="Tudo que o seu time precisa, em um só lugar"
          description="Funcionalidades robustas para elevar o fluxo de processos e transformá-lo em mais produtividade."
        />

        <div className="mt-7 grid gap-3.5 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map(feature => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
