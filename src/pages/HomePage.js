import { ConceptSection } from "../sections/ConceptSection";
import { DemoSection } from "../sections/DemoSection";
import { IntroSection } from "../sections/IntroSection";
import { ProcessSection } from "../sections/ProcessSection";
import { TeamSection } from "../sections/TeamSection";
export function HomePage() {
  return (
    <div className="flex flex-col main-body items-center mb-[60px]" id="home">
      <IntroSection />
      <ConceptSection />
      <ProcessSection />
      <DemoSection />
      <TeamSection />
    </div>
  );
}
