import Header from "./Components/Header";
import Solutation from "./Components/ Salutation";
import "./Assets/Styles/Css/pages.css"
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
