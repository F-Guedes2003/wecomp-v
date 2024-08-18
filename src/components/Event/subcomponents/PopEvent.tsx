import "./PopUpEvnt.css";
import { useState } from "react";
import ReactModal from "react-modal";
import PopUpEventTab from "./PopUpEventTab.js";
import { iEvent } from "../../../Type/EventType.js";
import ActionButton from "../../Button/ActionButton.js";
import ClassificationBadge from "./ClassificationBadge";

interface PopUpEventPros extends iEvent {
  subTitle: string;
}

export default function PopUpEvent({
  name,
  link,
  active,
  subTitle,
  vacancies,
  classification,
  author,
  location,
  description,
  bio,
  date,
  time,
}: PopUpEventPros) {
  const [isOpen, setIsOpen] = useState(false);

  const registrationPeriodActive = true;

  return (
    <div className="popUp">
      <ActionButton text="Descrição" action={() => setIsOpen(true)} />
      <ReactModal className="popUpTeste" overlayClassName="popUpOverlay" isOpen={isOpen} contentLabel="Example Modal">
        <div className="popUpDescription">
          <h2 className="modalTitle">{subTitle ? name + " - " + subTitle : name}</h2>
          <h3>{author}</h3>
          <p>
            {date} | {time}
          </p>
          {bio ? (
            Array.isArray(bio) ? (
              <PopUpEventTab texts={["Descrição", "Bio"]} descriptions={[description, ...bio]} />
            ) : (
              <PopUpEventTab texts={["Descrição", "Bio"]} descriptions={[description, bio]} />
            )
          ) : (
            <PopUpEventTab texts={["Descrição"]} descriptions={[description]} />
          )}
          {vacancies ? <p>Quantidade de vagas: {vacancies}</p> : <></>}
          <div className="badge-line">
            {classification ? <p>Dificuldade: {classification}</p> : <></>}
            <ClassificationBadge classification={classification} />
          </div>
          <p className="location">Local: {location}</p>
          {link ? (
            <div className="inline">
              <ActionButton text="Inscreva-se" link={link} active={active && registrationPeriodActive} />
              <ActionButton text="Fechar" action={() => setIsOpen(false)} />
            </div>
          ) : (
            <ActionButton text="Fechar" action={() => setIsOpen(false)} />
          )}
        </div>
      </ReactModal>
    </div>
  );
}
