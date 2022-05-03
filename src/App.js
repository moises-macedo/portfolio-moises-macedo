import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import './Assests/Styles/Css/global.css'
import Salutation from "./Components/ Salutation";


function App() {
  return (
    <div className="body">
      <Header />
      <Welcome/>
      <Salutation/>
    </div>
  );
}

export default App;
