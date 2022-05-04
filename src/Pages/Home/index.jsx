import Header from "../../Components/Header";
import Welcome from "../../Components/Welcome";
import Jobs from "../../Components/Jobs";
import "../../Assests/Styles/Css/pages.css"
import Salutation from "../../Components/ Salutation";
import { useState } from "react";

const Home = () => {
    const [isActiveJobs, setIsActiveJobs] = useState(false)
    return (
        <div className="container--home">            
            <Welcome />
            
        </div>
    )
}

export default Home