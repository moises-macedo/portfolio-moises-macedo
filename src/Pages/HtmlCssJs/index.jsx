import Html from "../../Components/Html"
import "../../Assests/Styles/Css/pages.css"
import Header from "../../Components/Header"
import Salutation from "../../Components/ Salutation"
import ReturnButton from "../../Components/ReturnButton"

const HtmlCssJs = () => {
    return (
        <div className="container--pages">
            <ReturnButton/>            
            <Html />
        </div>
    )
}

export default HtmlCssJs