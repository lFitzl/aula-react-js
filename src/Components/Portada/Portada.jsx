import React, { Fragment } from 'react'
import './Portada.css'
import {Link} from 'react-router-dom'

const Portada = ({tit1, tit2, ruta}) => {
    return(
        <Fragment>
            <div className="portada">
                <h1> {tit1} <br/> {tit2} </h1>
                <Link to={ruta} className="btn-more">SABER MÁS</Link>
            </div>
        </Fragment>
    )
}

export default Portada