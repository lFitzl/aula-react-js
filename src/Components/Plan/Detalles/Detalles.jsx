import React from 'react';
import './Detalles.css'

const Detalles = ({det, check, value}) => {
    return(
        <div className="nivel">
            <h3> {det} </h3>
            <span className={check}> {value} </span>
        </div>
    )
}

export default Detalles