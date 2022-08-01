import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStylesReset from "../assets/GlobalStylesReset";
import GlobalStyles from "../assets/GlobalStyles";
import Header from "./Header";
import MoviesList from "./MoviesList";
import SessionsMovie from "./SessionsMovie";
import Seats from "./Seats";
import { useState } from 'react';

export default function App() {
  
  const [optionUser, setOptionUser] = useState({});

  return (
    <BrowserRouter>
      <GlobalStylesReset />
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<MoviesList 
        optionUser={optionUser} setOptionUser={setOptionUser}/>} />

        <Route path="/movie/:movieId" element={<SessionsMovie 
        optionUser={optionUser} setOptionUser={setOptionUser} />} />

        <Route path='/session/:sessionId' element={<Seats />} />
      </Routes>
    </BrowserRouter>
  );
}