import "./Parceiros.css";
import { useState, useEffect } from "react";
import AboutPartners from "./subcomponents/AboutPartners";
import GroupOfPartners from "./subcomponents/GroupOfPartners";
import ConteinerCard from "../../components/Card/ConteinerCard";
import { useBreakpointValue } from "@chakra-ui/react";
import GroupOfCollaborators from "./subcomponents/GroupOfCollaborators";

interface IParceirosProps {
  isLandscape: boolean;
}

export default function Parceiros({ isLandscape }: IParceirosProps) {
  const [haspartner] = useState(true);
  const [supporters, setSupporters] = useState([]);
  const [realization, setRealization] = useState([]);
  const [organizers, setOrganizers] = useState([]);
  const[wecompSupport, setWecompSupport] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch("/Data/partners.json");
        const data = await response.json();
        setSupporters(data.supporters);
        setRealization(data.realizadores);
        setOrganizers(data.organizers);
        setWecompSupport(data.wecompSupport);
      } catch (error) {
        console.error("Ocorreu um erro ao obter os integrantes:", error);
      }
    };

    fetchPartners();
  }, []);

  const width = useBreakpointValue({ base: "75vw", md: "70vw", lg: "173vh" }) ?? "80vw";

  return (
    <div id="parceiros" className={`partners ${isLandscape ? "partners-landscape" : ""}`}>
      <div className="conteinerCard">
        <ConteinerCard heigth="auto" width={width} padding={"1rem"}>
          <div className="partnersTile">
            {haspartner ? (
              <GroupOfPartners partners={supporters} text="Apoiadores" isLandscape={isLandscape} />
            ) : (
              <AboutPartners />
            )}
            <div className="staff">
              <GroupOfCollaborators partners={realization} text="Realização" isLandscape={isLandscape} />
              <GroupOfCollaborators partners={organizers} text="Organização" isLandscape={isLandscape} />
              <GroupOfCollaborators partners={wecompSupport} text="Wecomp apoia" isLandscape={isLandscape} />
            </div>

          </div>
        </ConteinerCard>
      </div>
    </div>
  );
}
