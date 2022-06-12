import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import "../../Assets/Styles/Css/html.css"
import { useState, useEffect, useRef } from 'react';
import { apiHtml } from "../../Services/Api";



const Html = () => {

    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        apiHtml.get()
            .then((res) => setData(res.data.productsHtml))
            .catch(err => console.log(err))

    }, [])

    const handleLefClick = (e) => {
        e.preventDefault();        
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handlerigthClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }


    return (
        <div className="container--html">            
            <div className="container--main-card" ref={carousel}>
                {data.map((el) => {
                    const { id, name, language, image, address, description } = el;
                    return (
                        <div key={id} className="container--card">
                            <div className="card--img">
                                <img src={image} alt={name} />
                            </div>
                            <ul className="card--products">
                                <li className="card--name">Nome: <span>{name}</span></li>
                                <li className="card--description">Descrição: <span>{description} </span></li>
                                <li className="card--language">Linguagem: <span>{language}</span></li>
                            </ul>
                            <div className="card--button">
                                <button onClick={() => window.open(address)}>
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                                    <span>Acessar</span>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="container--btn">
                <button className="btn--left" onClick={handleLefClick}  >
                    <p>
                        <BsFillArrowLeftSquareFill size={50} color="#ff5e57" cursor={'pointer'} />
                    </p>
                </button>
                <button className="btn--rigth" onClick={handlerigthClick} >
                    <BsFillArrowRightSquareFill size={50} color="#ff5e57" cursor={'pointer'} />
                </button>
            </div>
            

        </div>
    )
}

export default Html