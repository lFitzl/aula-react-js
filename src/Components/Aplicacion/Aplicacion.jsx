import React from 'react';
import './Aplicacion.css'

const Aplicacion = ({img, tit1, text1, clase, tit2, text2}) => {
    return(
        <>
            <div className="aplicacion">
                <div className="aplicacion1">
                    <img src={img} alt="aula" className="aplicacion-img"/>
                    <div className="aplicacion-text txt1">
                        <h1>{tit1} </h1>
                        <span className={clase}></span>
                        <p>{text1} </p>
                        <h1>{tit2} </h1>
                        <span className={clase}></span>
                        <p>{text2} </p>
                    </div>
                </div>        
            </div>
        </>
    )
}

export default Aplicacion