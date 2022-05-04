import Html from "../../Components/Html"
import "../../Assests/Styles/Css/pages.css"
import Header from "../../Components/Header"
import Salutation from "../../Components/ Salutation"

const HtmlCssJs = () => {
    return (
        <div className="container--home">
            <Header />
            <Html />
            <Salutation />
        </div>
    )
}

export default HtmlCssJs