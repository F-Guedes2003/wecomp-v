import "./Event.css";
import { iEvent } from "../../Type/EventType";
import PopUpEvent from "./subcomponents/PopEvent";
import EventStatus from "./subcomponents/EventStatus";
import ClassificationLevel from "./subcomponents/ClassificationLevel";

export default function Event({
  link,
  location,
  description,
  vacancies,
  active,
  name,
  subTitle,
  image,
  imageDesc,
  status,
  classification,
  author,
  date,
  time,
  bio,
}: iEvent) {
  return (
    <div className="event">
      <h2 className="eventTitle">{name}</h2>
      <div className="eventBanner">
        <img className="eventImage" src={image} alt={imageDesc} />
        {status ? <EventStatus status={status} /> : <></>}
        {classification != undefined ? <ClassificationLevel classification={classification} /> : <></>}
      </div>

      <h3 className="eventAuthor">{author}</h3>
      <div className="eventDateTime">
        <p className="eventDate">{date}</p>
        <p className="eventTime">{time}</p>
      </div>
      <PopUpEvent
        name={name}
        link={link}
        active={active}
        vacancies={vacancies}
        classification={classification}
        author={author}
        location={location}
        description={description}
        bio={bio}
        date={date}
        time={time}
        subTitle={subTitle}
        id={0}
        image={""}
        imageDesc={""}
        status={""}
      />
    </div>
  );
}
