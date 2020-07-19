import React from 'react'
import {Link} from 'react-router-dom'
import './NotFound.css'
import img404 from './404.svg'

const NotFound = () => {
    return(
        <>
            <div className="notFound">
                <img src={img404} alt="404" className="img-404"/>
                <h1>Te has perdido</h1>
                <br/>
                <Link to='/' className="btn-return">Vuelve al Inicio</Link>
            </div>
        </>
    )
}

export default NotFound