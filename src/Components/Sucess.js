import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Sucess({ optionUser, setOptionUser }) {
  let seats = optionUser.seats;
  let navigate = useNavigate();
  return (
    <>
      <Message>
        <h1>Pedido feito com sucesso!</h1>
      </Message>

      <Ticket>
        <h1>Filme e sessão</h1>
        <h2>{optionUser.title}</h2>
        <h2>
          {optionUser.date} - {optionUser.time}
        </h2>
      </Ticket>

      <Ticket>
        <h1>Ingressos</h1>
        {seats.map((value) => (
          <h2> Assento {value}</h2>
        ))}
      </Ticket>

      <Ticket>
        <h1>Comprador</h1>
        <h2>Nome: {optionUser.name}</h2>
        <h2>CPF: {optionUser.cpf}</h2>
      </Ticket>

      <Button>
        <button
          onClick={() => {
            setOptionUser({});
            navigate("/");
          }}
        >
          Voltar pra Home
        </button>
      </Button>
    </>
  );
}

const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    background-color: var(--color-background-app);
    height: 100px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-primary);
    font-size: 24px;
    color: var(--color-message-sucess);
    margin-top: 66px;
    font-weight: 700;
    text-align: center;
  }
`;

const Ticket = styled.div`
  margin: 30px 0 0 30px;

  h1 {
    font-family: var(--font-primary);
    font-size: 24px;
    font-weight: bold;
    color: var(--color-font);
    margin: 12px 0;
  }

  h2 {
    font-family: var(--font-primary);
    font-size: 22px;
    color: var(--color-font);
    margin: 10px 0;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    height: 42px;
    width: 225px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);
    color: var(--color-background-app);
    font-size: 18px;
    font-family: var(--font-primary);
    border-radius: 5px;
    margin-top: 40px;
    border: 1px #e8833a solid;

    &:hover {
      cursor: pointer;
      filter: brightness(110%);
    }
  }
`;
