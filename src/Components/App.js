import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStylesReset from "../assets/GlobalStylesReset";
import GlobalStyles from "../assets/GlobalStyles";
import Header from "./Header";
import MoviesList from "./MoviesList";
import styled from 'styled-components';


export default function App() {
  return (
    <BrowserRouter>

      <GlobalStylesReset />
      <GlobalStyles />
      <Header />
      <Container />
      <Routes>
      <Route path='/' element={<MoviesList />} />
      </Routes>
    </BrowserRouter>
  );
}

const Container = styled.div`
  margin-top: 66px;
`