import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import { useState, useEffect, useRef } from 'react';

const ButtonCarousel = ({carousel}) =>{
    carousel = useRef(null);

    const handleLefClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handlerigthClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
    

    return(
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
    )

}

export default ButtonCarousel