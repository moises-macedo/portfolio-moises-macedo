import { DiJsBadge, DiCss3, DiHtml5, DiReact, DiSass } from "react-icons/di";
import "../../Assets/Styles/Css/jobs.css";
import { useNavigate } from "react-router-dom";

const Jobs = () => {
    const navigateHtml = useNavigate();
    const navigateReact = useNavigate()
    return (
        <div className="container--jobs">
            <div className="jobs--html">
                <h4>Html - Css - Js</h4>
                <button onClick={()=> navigateHtml('html-css-js')}>
                    <ul>
                        <li><DiHtml5 size={25} color='#1e272e' /></li>
                        <li><DiCss3 size={25} color='#1e272e' /></li>
                        <li><DiJsBadge size={25} color='#1e272e' /></li>
                    </ul>
                </button>
            </div>
            <p className="p--division"></p>
            <div className="container--react">
                <button onClick={()=> navigateHtml('react')}>
                    <ul>
                        <li><DiReact size={25} color='#1e272e' /></li>
                        <li> <DiSass size={25} color='#1e272e' /></li>
                    </ul>
                </button>
                <h4>ReactJs - Sass</h4>
            </div>
        </div>
    )
}

export default Jobs