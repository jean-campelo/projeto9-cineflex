//import { BrowserRouter, Routers, Route } from 'react-router-dom';
import GlobalStylesReset from "../assets/GlobalStylesReset";
import GlobalStyles from "../assets/GlobalStyles";
import Header from "./Header";
import MoviesList from "./MoviesList";
import styled from 'styled-components';

export default function App() {
  return (
    <>
      <GlobalStylesReset />
      <GlobalStyles />
      <Header />
      <Container />
      <MoviesList />
      
    </>
  );
}

const Container = styled.div`
  margin-top: 66px;
`