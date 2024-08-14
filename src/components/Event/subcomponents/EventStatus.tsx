import "./EventStatus.css";

interface EventStatusI {
  status: string;
}
function EventStatus({ status }: EventStatusI) {
  let status_color;
  let font_size;
  switch (status) {
    case "ESGOTOU!":
      status_color = "#800000 ";
      break;
    case "ÚLTIMAS VAGAS!":
      status_color = "#FF9900";
      break;
    case "VAGAS ABERTAS!":
      status_color = "#256600"
      font_size = "15px";
      break;
    case "INSCRIÇÕES EM BREVE!":
      status_color = "#FF9900";
      font_size = "12px";
      break;
  }
  return (
    <div className="event-status" style={{ backgroundColor: status_color}}>
      <p style={{fontSize: font_size}}>{status}</p>
    </div>
  );
}
export default EventStatus;
