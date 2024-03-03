import ConteinerCard from "../../../../components/Card/ConteinerCard";
import "./Schedule.css";

export default function aboutSchedule() {
  return (
    <div className="conteiner">
      <ConteinerCard heigth="100%">
        <div className="schedule-description">
          <h3>Programação: </h3>
          <p>
            Estamos preparando uma semana repleta de aprendizado, networking e inspiração para você! A programação
            completa da Semana da Computação estará disponível em breve. Aguarde por palestras emocionantes, workshops
            práticos e oportunidades de crescimento profissional. Fique ligado para mais detalhes!
          </p>
        </div>
      </ConteinerCard>
    </div>
  );
}
