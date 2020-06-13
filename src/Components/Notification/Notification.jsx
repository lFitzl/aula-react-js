import React from 'react'
import './Notification.css'
import {Link} from 'react-router-dom'

const Notification = (props) =>{
    return(
        <div className="notification">
            <div className="contents">
                <small> {props.anuncio} </small>
                <p><Link to={props.ruta}>Click aquí</Link></p>
            </div>
            <div className="notification-img">
                <img src={props.img} alt="servicios"/>
            </div>
        </div>
    )
}

export default Notification