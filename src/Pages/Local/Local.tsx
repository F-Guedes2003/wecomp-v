import "./Location.css";
import LocationFrame from "./subcomponents/LocationFrame";
import Locations from "../../../public/Data/location.json";
import ConteinerCard from "../../components/Card/ConteinerCard";
import { useBreakpointValue } from "@chakra-ui/react";

interface ILocationProps {
  isLandscape: boolean;
}
export default function Local({ isLandscape }: ILocationProps) {
  const width = useBreakpointValue({ base: "85vw", md: "60vw", lg: "fit-content" }) ?? "85vw";

  return (
    <div id="local" className={`local ${isLandscape ? "local-landscape" : ""}`}>
      <div className="conteinerLocation">
        <ConteinerCard heigth="fit-content" width={width} padding={"auto"} >
          <h1 className="title">Locais do Evento </h1>
          <div className="locations">
            {Locations.map((location) => {
              return <LocationFrame address={location.address} name={location.name} src={location.src} />;
            })}
          </div>
        </ConteinerCard>
      </div>
    </div>
  );
}
