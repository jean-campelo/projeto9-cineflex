import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Description from "./Description";
import Forms from './Forms';

export default function Seats({optionUser, setOptionUser}) {
  const { sessionId } = useParams();
  const [seatsList, setSeatsList] = useState([]);

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`
    );

    promisse.then((response) => {
      let dados = response.data.seats;

      setSeatsList(
        dados.map((value) => {
          return { ...value, selected: false };
        })
      );
    });
  }, []);

  return (
    <Container>
      <Select>Selecione o(s) assento(s)</Select>
      <MainSeats>
        {seatsList.map((seat) => (
          <RenderSeats
            id={seat.id}
            position={seat.name}
            status={seat.isAvailable}
            seat={seat}
            selected={seat.selected}
            seatsList={seatsList}
            setSeatsList={setSeatsList}
          />
        ))}
      </MainSeats>
      <Description />
      <Forms seatsList={seatsList} optionUser={optionUser} setOptionUser={setOptionUser} />
    </Container>
  );
}

function RenderSeats({
  seat,
  status,
  position,
  id,
  selected,
  seatsList,
  setSeatsList,
}) {
  return (
    <Seat
      key={id}
      status={status}
      selected={selected}
      onClick={() => SelectedSeat(seat, seatsList, setSeatsList, selected, status)}
    >
      {position}
    </Seat>
  );
}

function SelectedSeat(seat, seatsList, setSeatsList, selected, status) {
  if (status === false) {
    alert("Esse assento não está disponível");
  } else {
    seat.selected = !selected;
    setSeatsList([...seatsList]);
  }
}

const Container = styled.main`
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Select = styled.h1`
  margin-top: 100px;
  margin-bottom: 10px;
  background-color: var(--color-background-app);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-primary);
  font-size: 24px;
`;

const MainSeats = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 340px;
  margin-top: 20px;
`;

const Seat = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  margin-bottom: 20px;
  font-family: var(--font-primary);
  color: #000000;
  font-size: 12px;

  border: ${(props) =>
    props.status ? "1px solid #7B8B99" : "1px solid #F7C52B"};
  background-color: ${(props) => (props.status ? "#C3CFD9" : "#FBE192")};

  border: ${(props) => (props.selected ? "1px solid #1AAE9E" : "")};
  background-color: ${(props) => (props.selected ? "#8DD7CF" : "")};

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
`;
