import { BsArrowReturnLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../../Assests/Styles/Css/returnButton.css";

const ReturnButton = () => {
    const fromNavigate = useNavigate()
    return (
        <div className="container--button">
            <button onClick={()=> fromNavigate(-1)}>
                <BsArrowReturnLeft color="#ff5e57" size={30} />
            </button>
        </div>
    )
}

export default ReturnButton