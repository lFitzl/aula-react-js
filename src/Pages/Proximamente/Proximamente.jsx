import React from 'react';
import Footer from '../../Components/Footer/Footer'
import './Proximamente.css'
import imgProx from './proximamente.svg'

const Proximamente = () => {
    return(
        <div className="proximamente">
            <img src={imgProx} alt="proximamente" className="imgProx"/>
            <h1>Aún en construcción</h1>
            <Footer/>
        </div>
    )
}

export default Proximamente