import { HeroSection } from "./HeroSection";
import { FaqSection } from "./FaqSection";
import { ResultsSection } from "./ResultsSection";
import { SectionDivider } from "../components/layout/SectionDivider";

export function Home() {
  return (
    <main>
      <HeroSection />
      <SectionDivider />
      <FaqSection />
      <SectionDivider />
      <ResultsSection />
    </main>
  );
}
