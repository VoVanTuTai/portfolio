import type { NavigateHandler } from "@/types";
import { StudioLayout } from "./StudioLayout";
import { sampleConceptsData, sampleLessonData, studioModulesData } from "./studio-sample-data";

interface StudioPageProps {
  navigate: NavigateHandler;
}

export function StudioPage({ navigate }: StudioPageProps) {
  return (
    <StudioLayout
      navigate={navigate}
      modules={studioModulesData}
      lesson={sampleLessonData}
      concepts={sampleConceptsData}
      activeNavTab="studio"
    />
  );
}

export default StudioPage;
