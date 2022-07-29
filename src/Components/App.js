import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStylesReset from "../assets/GlobalStylesReset";
import GlobalStyles from "../assets/GlobalStyles";
import Header from "./Header";
import MoviesList from "./MoviesList";
import SessionsMovie from "./SessionsMovie";
import Seats from "./Seats";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStylesReset />
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<MoviesList />} />

        <Route path="/movie/:movieId" element={<SessionsMovie />} />
        <Route path='/session/:sessionId' element={<Seats />}/>
      </Routes>
    </BrowserRouter>
  );
}