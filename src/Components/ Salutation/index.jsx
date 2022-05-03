import "../../Assests/Styles/Css/salutation.css";
import { BsWhatsapp } from "react-icons/bs";

const Salutation = () => {

    const handleWhatsapp = () => window.open('https://web.whatsapp.com/send?phone=5541987169042');
    return (
        <div className="container--salutation">
            <div className="salutation--me">
                <h1>He<span>ll</span>o,</h1>
                <h3>Eu sou <span>Moisés Alex</span> !</h3>
            </div>
            <div className="salutation--btn">
                <button onClick={handleWhatsapp}>
                    <p>Contactar-me</p>
                    <BsWhatsapp size={10} color='black'/>
                </button>
            </div>
        </div>
    )
}

export default Salutation