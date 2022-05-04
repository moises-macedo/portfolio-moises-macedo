import './Assests/Styles/Css/global.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Works from './Pages/Works';
import HtmlCssJs from './Pages/HtmlCssJs';
import Header from "./Components/Header";



function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route path={'/trabalhos'} element={<Works />} />
        <Route path={'trabalhos/html-css-js'} element={<HtmlCssJs />} />
      </Routes>
    </>
  );
}

export default App;
