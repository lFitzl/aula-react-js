import React from 'react';
import './Muestras.css'
import {Link} from 'react-router-dom'

const Muestras = ({servicio, ruta, nombre}) => {
    return(
        <div className="imagen-servicio">
            <img src={servicio} alt=""/>
            <Link to={ruta}>
                <div className="hover-galeria">
                    <p>{nombre}</p>
                </div>
            </Link>
        </div>
    )
}

export default Muestras