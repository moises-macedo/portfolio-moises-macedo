import { useState } from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import "../../Assets/Styles/Css/header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ }) => {
    const [activeWorks, setActiveWorks] = useState(false);
    const [activeAbout, setActiveAbout] = useState(false);
    const [activeContacts, setActiveContacts] = useState(false);
    const navigateWorks = useNavigate()

    const handleWorks = () => {
        setActiveWorks(true);
        setActiveAbout(false);
        setActiveContacts(false);
        navigateWorks('/trabalhos')
    }
    const handleAbout = () => {
        setActiveWorks(false);
        setActiveAbout(true);
        setActiveContacts(false);
        navigateWorks('/sobre-mim')
    }
    const handleContacts = () => {
        setActiveWorks(false);
        setActiveAbout(false);
        setActiveContacts(true);
    }

    const handleGithub = () => window.open('https://github.com/moises-macedo');
    const handleLinkedin = () => window.open('https://www.linkedin.com/in/mois%C3%A9s-alex-macedo-71413a9a/');
    const handleEmail = () => window.open('mailto:moses.mabyda@gmail.com');

    return (
        <div className="container--main-header">
            <div className="header--titles">
                <button className="titles--works" onClick={handleWorks}>
                    <p className={activeWorks === true ? "works--null" : "works--active"}>Trabalhos</p>
                    {activeWorks === true ? (<span>&nbsp;</span>)
                        : null}
                </button>
                <button className="titles--about" onClick={handleAbout}>
                    <p className={activeAbout === true ? "about--null" : "about--active"}>Sobre</p>
                    {activeAbout === true ? (<span>&nbsp;</span>)
                        : null}
                </button>
                <button className="titles--contacts" onClick={handleContacts}>
                    <p className={activeContacts === true ? "contacts--null" : "contacts--active"}>Contato</p>
                    {activeContacts === true ? (<span>&nbsp;</span>)
                        : null}
                </button>

            </div>
            <div className="header--icons">
                <ul>
                    <li onClick={handleGithub}>
                        <AiFillGithub size={35} color="#d2dae2" />
                    </li>
                    <li onClick={handleLinkedin}>
                        <AiFillLinkedin size={35} color="#d2dae2" />
                    </li>
                    <li onClick={handleEmail}>
                        <AiOutlineMail size={35} color="#d2dae2" />
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header