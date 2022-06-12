import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "../../Assets/Styles/Css/animation.css";
import Works from '../../Pages/Works';
import HtmlCssJs from '../../Pages/HtmlCssJs';
import Welcome from '../Welcome';
import ReactSass from "../../Pages/ReactSass";
import DetailAboutMe from '../../Pages/DetailAboutMe';

const RoutesPages = () => {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="transition" timeout={200}>
                <Routes location={location}>
                    <Route exact path={'/'} element={<Welcome />} animation={false} />
                    <Route path={'/trabalhos'} element={<Works />} />
                    <Route path={'trabalhos/html-css-js'} element={<HtmlCssJs />} />
                    <Route path={'trabalhos/react'} element={<ReactSass />} />
                    <Route path={"/sobre-mim"} element={<DetailAboutMe />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    )
}
export default RoutesPages