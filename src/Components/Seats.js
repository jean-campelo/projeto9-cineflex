import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Description from "./Description";

export default function Seats({occupied}) {
  const { sessionId } = useParams();
  const [seatsList, setSeatsList] = useState([]);
  
  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`
    );

    promisse.then((response) => setSeatsList(response.data.seats));
  }, []);

  return (
    <Container>
      <Select>Selecione o(s) assento(s)</Select>

      <MainSeats>
        {seatsList.map((seat) => (
          <RenderSeats position={seat.name} status={seat.isAvailable} occupied={occupied}/>
        ))}
      </MainSeats>
      <Description />
    </Container>
  );
}

function RenderSeats ({position, occupied, status}) {
    return (
        <Seat occupied={occupied} status={status}>
            {position}
        </Seat>
    )
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

    border: ${(props) => props.status ? '1px solid #7B8B99' : '1px solid #F7C52B'};
    background-color: ${(props) => props.status ? '#C3CFD9' : '#FBE192'};
`;

