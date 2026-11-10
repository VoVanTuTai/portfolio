import { Suspense, lazy, useEffect, useState } from "react";
import type { NavigateHandler } from "@/types";
import { pageTitles } from "@/data/lessons/learning-path";
import { RouteLoader } from "@/components/RouteLoader";

const PortfolioPage = lazy(() => import("@/features/portfolio/PortfolioPage"));
const KnowledgeHubPage = lazy(() => import("@/features/knowledge/KnowledgeHubPage"));
const ProgrammingLanguagesPage = lazy(
  () => import("@/features/knowledge/ProgrammingLanguagesPage"),
);
const DatabasePage = lazy(() => import("@/features/knowledge/DatabasePage"));
const DataModelingPage = lazy(() => import("@/features/knowledge/DataModelingPage"));
const BackendApiPage = lazy(() => import("@/features/knowledge/BackendApiPage"));
const BusinessAnalysisPage = lazy(() => import("@/features/knowledge/BusinessAnalysisPage"));

export function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    document.title = pageTitles[pathname] ?? "Vo Van Tu Tai Portfolio";
  }, [pathname]);

  const navigate: NavigateHandler = (event, path) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    window.history.pushState({}, "", path);
    setPathname(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    if (pathname === "/knowledge") return <KnowledgeHubPage navigate={navigate} />;
    if (pathname === "/knowledge/programming-languages") {
      return <ProgrammingLanguagesPage navigate={navigate} />;
    }
    if (pathname === "/knowledge/database") return <DatabasePage navigate={navigate} />;
    if (pathname === "/knowledge/database/data-modeling") {
      return <DataModelingPage navigate={navigate} />;
    }
    if (pathname === "/knowledge/backend-api") return <BackendApiPage navigate={navigate} />;
    if (pathname === "/knowledge/business-analysis") {
      return <BusinessAnalysisPage navigate={navigate} />;
    }
    return <PortfolioPage navigate={navigate} />;
  };

  return <Suspense fallback={<RouteLoader />}>{renderPage()}</Suspense>;
}

export default App;
