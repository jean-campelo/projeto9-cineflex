//import { BrowserRouter, Routers, Route } from 'react-router-dom';
import GlobalStylesReset from "../assets/GlobalStylesReset";
import GlobalStyles from "../assets/GlobalStyles";
import Header from "./Header";


export default function App() {
  return (
    <>
      <GlobalStylesReset />
      <GlobalStyles />
      <Header />
    </>
  );
}
