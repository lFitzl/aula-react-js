import React from 'react'
import './Notification.css'
import {Link} from 'react-router-dom'

const Notification = ({anuncio, ruta, img}) =>{
    return(
        <div className="notification">
            <div className="contents">
                <small> {anuncio} </small>
                <p><Link to={ruta}>Click aquí</Link></p>
            </div>
            <div className="notification-img">
                <img src={img} alt="servicios"/>
            </div>
        </div>
    )
}

export default Notification