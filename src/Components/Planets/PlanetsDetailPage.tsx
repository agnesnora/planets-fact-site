import { FC, useContext, useState } from "react";
import { AppContext } from "../../App";
import { useParams } from "react-router-dom";
import { PlanetDetailComponent } from "./PlanetDetailComponent";
import { PlanetData } from "../../../data";

interface RouteParams {
  name: string;
}

const isRouteParams = (params: any): params is RouteParams => {
  return typeof params === "object" && "name" in params;
};

export const PlanetsDetailPage: FC = () => {
  const context = useContext(AppContext);
  const params = useParams();
  const [view, setView] = useState<string>("planet");

  if (!isRouteParams(params) || !context) {
    console.error("Invalid params or context not available:", params, context);
    return null;
  }

  const typedParams = params as RouteParams;
  const planet: PlanetData | undefined = context.planets.find(
    (planet) => planet.name === typedParams.name
  );

  return (
    <PlanetDetailComponent planet={planet} view={view} setView={setView} />
  );
};

export default PlanetsDetailPage;
