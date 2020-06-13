import React, { Fragment } from 'react';
import './Aplicacion.css'

const Aplicacion = (props) => {
    return(
        <Fragment>
            <div className="aplicacion">
                <div className="aplicacion1">
                    <img src={props.img} alt="aula" className="aplicacion-img"/>
                    <div className="aplicacion-text txt1">
                        <h1>{props.tit1} </h1>
                        <span className={props.clase}></span>
                        <p>{props.text1} </p>
                        <h1>{props.tit2} </h1>
                        <span className={props.clase}></span>
                        <p>{props.text2} </p>
                    </div>
                </div>        
            </div>
        </Fragment>
    )
}

export default Aplicacion