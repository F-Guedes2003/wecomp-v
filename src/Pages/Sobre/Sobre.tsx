import "./AboutTheEvent.css";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import Infos from "./subcomponents/AboutWecomp";
import Contact from "../../components/Contato/ContatoInfos";
import ConteinerCard from "../../components/Card/ConteinerCard";

export default function Sobre() {
  const width = useBreakpointValue({ base: "80vw", md: "80vw", lg: "fit-content" }) ?? "80vw";

  return (
    <section id="informacoes" className="about-the-event">
      <div className="infoconteiner">
        <ConteinerCard heigth="fit-content" width={width} padding={"auto"}>
          <Box display={"flex"} flexDir={"column"} mt={5}>
            <Infos />
            <Contact isLandscape={true} />
          </Box>
        </ConteinerCard>
      </div>
    </section>
  );
}
