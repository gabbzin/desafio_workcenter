import type { ReactNode } from "react";

type ActionLinkProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  ariaLabel?: string;
};

const baseClassName =
  "inline-flex max-w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-5 sm:py-3";

const variants = {
  primary:
    "bg-primary text-white shadow-soft hover:bg-primary-light active:translate-y-px",
  secondary:
    "bg-white text-primary-text ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
};

export function ActionLink({
  href = "#",
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: ActionLinkProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`${baseClassName} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
