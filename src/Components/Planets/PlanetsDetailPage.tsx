import { useParams } from "react-router-dom";
import { FC, useContext } from "react";
import { AppContext } from "../../App";
import { PlanetData } from "../../../data";

interface RouteParams {
  name: string;
}

const isRouteParams = (params: any): params is RouteParams => {
  return typeof params === "object" && "name" in params;
};

export const PlanetsDetailPage: FC = () => {
  const context = useContext(AppContext);
  if (!context) {
    console.error("Context is not available");
    return null;
  }

  const params = useParams();

  if (!isRouteParams(params)) {
    console.error("Invalid params:", params);
    return null;
  }

  const typedParams = params as RouteParams;
  console.log(typedParams);
  const planet: PlanetData | undefined = context?.planets.find(
    (planet) => planet.name === typedParams.name
  );
  if (!planet) {
    // Handle the case where the planet is not found
    console.error(`Planet with name ${typedParams.name} not found`);
    return null;
  }
  console.log(planet);
  return <h1>I am the {planet.name}</h1>;
};
