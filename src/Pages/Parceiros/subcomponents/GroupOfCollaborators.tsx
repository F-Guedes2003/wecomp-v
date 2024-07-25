import "./GroupOfCollaborators.css";
import Partner from "./Partner";
import Header from "../../../components/Header/header";

interface IPartner {
  id: string;
  src: string;
  link?: string;
  name?: string;
  width?: string;
}

interface GroupOfPartnersProps {
  partners: IPartner[];
  text: string;
  isLandscape: boolean;
}

export default function GroupOfCollaborators({ partners, text, isLandscape }: GroupOfPartnersProps) {
  return (
    <div className="main">
      <div className="collaboratorsTitleContainer">
        <Header title={text} />
      </div>
      <div className="groupOfCollaborators">
        {partners.map((partner) => (
          <Partner key={partner.id} partner={partner} image={partner.src} isLandscape={isLandscape} />
        ))}
      </div>
    </div>
  );
}
