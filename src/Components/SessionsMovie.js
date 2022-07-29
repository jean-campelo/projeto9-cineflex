import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function SessionsMovie() {
  const { movieId } = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`
    );

    promisse.then((response) => setSessions(response.data.days));
  }, []);

  return (
    <>
      <Select>Selecione um horário</Select>
      {sessions.map((session) => (
        <RenderSessions
          weekday={session.weekday}
          date={session.date}
          showtimes={session.showtimes}
        />
      ))}
    </>
  );
}

function RenderSessions({ weekday, date, showtimes }) {
  return (
    <Container>
      <Date>
        {weekday} - {date}
      </Date>
      <ContainerTimes>
      {showtimes.map((times) => (
        <RenderTimes timeSession={times.name} />
      ))}  
      </ContainerTimes>
      
    </Container>
  );
}

function RenderTimes({ timeSession }) {
  return ( 
        <Time>{timeSession}</Time>
  );
}

const Select = styled.h1`
  background-color: var(--color-background-app);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-primary);
  font-size: 24px;
`;

const Container = styled.div`
    padding-left: 26px;
`;

const Date = styled.div`
  font-family: var(--font-primary);
  font-size: 20px;
  margin-bottom: 18px;
`;

const ContainerTimes = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 26px;
`

const Time = styled.div`
  width: 82px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  color: var(--color-background-app);
  font-size: 18px;
  font-family: var(--font-primary);
  border-radius: 5px;
  margin-right: 8px;

  &:hover {
    cursor: pointer;
  }
`;
