import "./Parceiros.css";
import { useState, useEffect } from "react";
import AboutPartners from "./subcomponents/AboutPartners";
import GroupOfPartners from "./subcomponents/GroupOfPartners";
import ConteinerCard from "../../components/Card/ConteinerCard";
import { useBreakpointValue } from "@chakra-ui/react";

interface IParceirosProps {
  isLandscape: boolean;
}

export default function Parceiros({ isLandscape }: IParceirosProps) {
  const [haspartner] = useState(false);
  const [supporters, setSupporters] = useState([]);
  const [organizers, setOrganizers] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch("/Data/partners.json");
        const data = await response.json();
        setSupporters(data.supporters);
        setOrganizers(data.organizers);
      } catch (error) {
        console.error("Ocorreu um erro ao obter os integrantes:", error);
      }
    };

    fetchPartners();
  }, []);

  const width = useBreakpointValue({ base: "75vw", md: "70vw", lg: "40vw" }) ?? "80vw";

  return (
    <div id="parceiros" className={`partners ${isLandscape ? "partners-landscape" : ""}`}>
      <div className="conteinerCard">
        <ConteinerCard heigth="auto" width={width}>
          <div className="partnersTile">
            {haspartner ? (
              <GroupOfPartners partners={supporters} text="Apoiadores" isLandscape={isLandscape} />
            ) : (
              <AboutPartners />
            )}

            <GroupOfPartners partners={organizers} text="Realização" isLandscape={isLandscape} />
          </div>
        </ConteinerCard>
      </div>
    </div>
  );
}
