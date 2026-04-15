type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <header className={`mx-auto max-w-3xl text-center ${className}`}>
      <h2 className="font-extrabold font-heading text-section-title text-text-primary tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2.5 text-body-13 text-text-secondary leading-relaxed sm:mt-3 sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
