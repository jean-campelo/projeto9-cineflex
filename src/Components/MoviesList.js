import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function MoviesList() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const promisse = axios.get(
      "https://mock-api.driven.com.br/api/v7/cineflex/movies"
    );

    promisse.then((response) => setMoviesList(response.data));
  }, []);

  return (
    <>
      <Select>Selecione um filme</Select>

      <ContainerPosters>
        {moviesList.map((movie, index) => (
          <RenderMovies
            poster={movie.posterURL}
            id={movie.id}
            index={index}
          />
        ))}
      </ContainerPosters>
    </>
  );
}

function RenderMovies({ poster, id, index }) {
  return (
    <Link to={`/movie/${id}`}>
      <Posters>
        <img src={poster} alt="poster movie" key={index} />
      </Posters>
    </Link>
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

const ContainerPosters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Posters = styled.div`
  width: 145px;
  height: 210px;
  background-color: var(--color-background-app);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6px 15px;
  box-shadow: var(--box-shadow-poster);
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 130px;
  }
`;
