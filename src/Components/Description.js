import styled from "styled-components";

export default function Description() {
  return (
    <Main>
      <Selected>Selecionado</Selected>
      <Spare>Disponível</Spare>
      <Occupied>Indisponível</Occupied>
    </Main>
  );
}

const Main = styled.div``;

const Selected = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-size: 12px;
  font-family: var(--font-primary);
  background-color: var(--color-selected);
  border: var(--border-selected);
`;

const Spare = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-size: 12px;
  background-color: var(--color-spare);
  border: var(--border-spare);
`;

const Occupied = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-size: 12px;
  background-color: var(--color-occupied);
  border: var(--border-occupied);
`;
