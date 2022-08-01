import styled from "styled-components";

export default function Description() {
  return (
    <Main>
      <Selected>
        <h1>Selecionado</h1>
      </Selected>
      <Spare>
        <h1>Disponível</h1>
      </Spare>
      <Occupied>
        <h1>Indisponível</h1>
      </Occupied>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  width: 230px;
  justify-content: space-between;
  margin-bottom: 100px;
  margin-top: 6px;
`;

const Selected = styled.div`
  display: flex;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-size: 12px;
  font-family: var(--font-primary);
  background-color: var(--color-selected);
  border: var(--border-selected);

  h1 {
    margin-top: 30px;
  }
`;

const Spare = styled.div`
  display: flex;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-size: 12px;
  background-color: var(--color-spare);
  border: var(--border-spare);

  h1 {
    margin-top: 30px;
  }
`;

const Occupied = styled.div`
  display: flex;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-size: 12px;
  background-color: var(--color-occupied);
  border: var(--border-occupied);

  h1 {
    margin-top: 30px;
  }
`;
