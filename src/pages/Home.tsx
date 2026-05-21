import { HeroSection } from "./HeroSection";
import { FaqSection } from "./FaqSection";
import { ResultsSection } from "./ResultsSection";
import { ArchitectureSection } from "./ArchitectureSection";
import { MethodSection } from "./MethodSection";
import { SectionDivider } from "../components/layout/SectionDivider";
import { SectionCap } from "../components/layout/SectionCap";

export function Home() {
  return (
    <main>
      <HeroSection />
      <SectionDivider />
      <FaqSection />
      <SectionDivider />
      <ResultsSection />
      <SectionDivider />
      <ArchitectureSection />
      <SectionDivider />
      <MethodSection />
      <SectionCap />
    </main>
  );
}
