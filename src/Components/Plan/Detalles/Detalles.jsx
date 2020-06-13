import React from 'react';
import './Detalles.css'

const Detalles = (props) => {
    return(
        <div className="nivel">
            <h3> {props.det} </h3>
            <span className={props.check}> {props.value} </span>
        </div>
    )
}

export default Detalles