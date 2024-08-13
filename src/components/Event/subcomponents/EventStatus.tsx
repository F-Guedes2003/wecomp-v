import "./EventStatus.css";

interface EventStatusI {
  status: string;
}
function EventStatus({ status }: EventStatusI) {
  let status_color;
  let status_height;
  switch (status) {
    case "ESGOTOU!":
      status_color = "#800000 ";
      status_height = "500px"
      break;
    case "ÚLTIMAS VAGAS!":
      status_color = "#FF9900";
      status_height = "60px";
      break;
    case "VAGAS ABERTAS!":
      status_color = "#256600"
      status_height = "60px";
      break;
    case "INSCRIÇÕES EM BREVE!":
      status_color = "#FF9900";
      status_height = "60px";
      break;
  }
  return (
    <div className="event-status" style={{ backgroundColor: status_color, height: status_height}}>
      <p>{status}</p>
    </div>
  );
}
export default EventStatus;
