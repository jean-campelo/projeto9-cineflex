import styled from 'styled-components';

export default function Sucess({optionUser}) {
  return (
    <>
    <Main>
      <Message>Pedido feito com sucesso!</Message>
    </Main>
    <h1>{optionUser.title}</h1>

    <h1>{optionUser.date}</h1>

    <h1>{optionUser.time}</h1>

    <h1> {optionUser.name} </h1>

    <h1> {optionUser.cpf} </h1>

    <h1> {optionUser.seats} </h1>
    
    {console.log(optionUser)}
    </>
  );
}

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: pink;

`;

const Message = styled.h1`
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
`;