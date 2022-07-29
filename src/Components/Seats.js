import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Seats() {
  const { sessionId } = useParams();
  const [seatsList, setSeatsList] = useState([]);

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`
    );

    promisse.then((response) => setSeatsList(response.data.seats));
  }, []);

  return <Container>{console.log(seatsList)}</Container>;
}

const Container = styled.main`
  margin-top: 66px;
  height: 50px;
  background-color: pink;
`;
