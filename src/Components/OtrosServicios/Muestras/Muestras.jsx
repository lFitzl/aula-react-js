import React from 'react';
import './Muestras.css'
import {Link} from 'react-router-dom'

const Muestras = (props) => {
    return(
        <div className="imagen-servicio">
            <img src={props.servicio} alt=""/>
            <Link to={props.ruta}>
                <div className="hover-galeria">
                    <p>{props.nombre}</p>
                </div>
            </Link>
        </div>
    )
}

export default Muestras