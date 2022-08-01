import styled from "styled-components";
import { useState } from "react";
import axios from  'axios';
import { useNavigate } from "react-router-dom";


export default function Forms({ seatsList, optionUser, setOptionUser }) {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");

  return (
    <Container>
      <Form onSubmit={finalizeOrder}>
        <h1>Nome do comprador:</h1>
        <input
          type="text"
          placeholder="Digite seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <h1>CPF do comprador:</h1>
        <input
          type="text"
          placeholder="Digite seu CPF..."
          value={document}
          onChange={(e) => setDocument(e.target.value)}
        ></input>

        <button type="submit">Reservar assento(s)</button>
      </Form>
    </Container>
  );

  function finalizeOrder(e) {
    e.preventDefault();

    const user = seatsList.filter((value) => {return value.selected})
    const seats = user.map((value) => value.id);
    const data = 
    {
      ids: (seats),
      name: name,
      cpf: document
    }

    const numberSeats = user.map((value) => value.name);
    setOptionUser({ ...optionUser, seats: numberSeats, name: name, cpf: document});

    const promisse = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', data);
    
    promisse.then(() => navigate('/sucess')  )

  }


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
    margin-top: 10px;
  }
`;
