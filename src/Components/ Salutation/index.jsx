import "../../Assests/Styles/Css/salutation.css";
import { BsWhatsapp } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Salutation = () => {
    const navigateHome = useNavigate()

    const handleWhatsapp = () => window.open('https://web.whatsapp.com/send?phone=5541987169042');
    return (
        <div className="container--salutation">
            <div className="salutation--icon">
                <button onClick={()=>navigateHome('/')}>
                    <BiHome size={25} color='#d2dae2'/>
                </button>
            </div>
            <section>
                <div className="salutation--me">
                    <h1>He<span>ll</span>o,</h1>
                    <h3>Eu sou <span>Moisés Alex</span> !</h3>
                </div>
                <div className="salutation--btn">
                    <button onClick={handleWhatsapp}>
                        <p>Contactar-me</p>
                        <BsWhatsapp size={10} color='black' />
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Salutation