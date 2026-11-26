import type { NavigateHandler } from "@/types";
import { Portfolio3ColumnPage } from "./studio-portfolio/Portfolio3ColumnPage";

interface PortfolioPageProps {
  navigate: NavigateHandler;
}

export function PortfolioPage({ navigate }: PortfolioPageProps) {
  return <Portfolio3ColumnPage navigate={navigate} />;
}

export default PortfolioPage;
