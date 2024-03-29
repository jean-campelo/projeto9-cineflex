import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Footer from './Footer';

export default function SessionsMovie({optionUser, setOptionUser}) {
  const { movieId } = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`
    );

    promisse.then((response) => setSessions(response.data.days));
  }, []);
    
  return (
      <Main>
        <Select>Selecione um horário</Select>
        {sessions.map((session) => (
          <RenderSessions
            weekday={session.weekday}
            date={session.date}
            showtimes={session.showtimes}
            optionUser={optionUser}
            setOptionUser={setOptionUser}
          />
        ))}
        <Footer optionUser={optionUser} />
      </Main>
  );
}

function RenderSessions({ weekday, date, showtimes, optionUser, setOptionUser}) {
  return (
    <Container>
      <Date>
        {weekday} - {date}
      </Date>
      <ContainerTimes>
      {showtimes.map((times) => (
        <RenderTimes timeSession={times.name} sessionId={times.id} date={date} optionUser={optionUser}
        setOptionUser={setOptionUser} weekday={weekday} />
      ))}  
      </ContainerTimes>
      
    </Container>
  );
}

function RenderTimes({
  timeSession,
  sessionId,
  date,
  optionUser, 
  setOptionUser, 
  weekday
}) {
  return (
    <Link
      to={`/session/${sessionId}`}
      onClick={() => setOptionUser({ ...optionUser, date: date, time: timeSession, weekday: weekday})}
      >
      <Time>{timeSession}</Time>
    </Link>
  );
}

const Main = styled.main`
    margin-top: 66px;
    margin-bottom: 130px;
`

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
