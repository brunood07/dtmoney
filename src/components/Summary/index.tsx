import { Container } from "./styles";
import IncomeImg from "../../assets/Entradas.svg";
import OutcomeImg from "../../assets/Saídas.svg";
import TotalImg from "../../assets/Total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>
          R$1000
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="Saídas" />
        </header>
        <strong>
          -
          R$500
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>
          R$500
        </strong>
      </div>

    </Container>
  )
}