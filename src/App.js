import './Assests/Styles/Css/global.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Works from './Pages/Works';
import HtmlCssJs from './Pages/HtmlCssJs';
import Header from "./Components/Header";
import Solutation from "./Components/ Salutation";
import "./Assests/Styles/Css/pages.css"
import RoutesPages from './Components/RoutesPages';



function App() {
  return (
    <div className="container--home">
      <Header />
      <RoutesPages />
      <Solutation />
    </div>
  );
}

export default App;
