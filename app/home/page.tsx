import {
  Features,
  FinalCta,
  Footer,
  Header,
  Hero,
  Pricing,
  Steps,
  Testimonials,
} from "./components";

export function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-primary-text">
      <Header />
      <main>
        <Hero />
        <Features />
        <Steps />
        <Testimonials />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
