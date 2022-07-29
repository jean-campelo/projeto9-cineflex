import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStylesReset from "../assets/GlobalStylesReset";
import GlobalStyles from "../assets/GlobalStyles";
import Header from "./Header";
import MoviesList from "./MoviesList";
import styled from 'styled-components';
import SessionsMovie from './SessionsMovie';


export default function App() {

  const [movieId, setMovieId] = useState(0);

  return (
    <BrowserRouter>

      <GlobalStylesReset />
      <GlobalStyles />
      <Header />
      <Container />
      <Routes>

      <Route path='/' element={<MoviesList  
      setMovieId={setMovieId} />} />

      <Route path='/movie/movieId' element={<SessionsMovie 
      movieId={movieId} 
      setMovieId={setMovieId}/>} />

      </Routes>
    </BrowserRouter>
  );
}

const Container = styled.div`
  margin-top: 66px;
`