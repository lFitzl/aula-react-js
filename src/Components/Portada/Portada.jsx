import React, { Fragment } from 'react'
import './Portada.css'
import {Link} from 'react-router-dom'

const Portada = (props) => {
    return(
        <Fragment>
            <div className="portada">
                <h1> {props.tit1} <br/> {props.tit2} </h1>
                <Link to={props.ruta} className="btn-more">SABER MÁS</Link>
            </div>
        </Fragment>
    )
}

export default Portada