import styled from "styled-components";

export default function Forms({ name, document }) {
  return (
    <Container>
      <Form>
        <h1>Nome do comprador:</h1>
        <input type="text" placeholder="Digite seu nome..."></input>

        <h1>CPF do comprador:</h1>
        <input type="text" placeholder="Digite seu CPF..."></input>
      </Form>
      <Send>Reservar assento(s)</Send>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  h1 {
    font-family: var(--font-primary);
    font-size: 18px;
    color: var(--color-font);
    margin: 4px 0;
  }

  input {
    font-family: var(--font-primary);
    font-size: 18px;
    font-style: italic;
    height: 50px;
    width: 320px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    color: #afafaf;
    margin-bottom: 16px;
  }
`;

const Send = styled.div`
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
  margin-top: 10px;
`;
