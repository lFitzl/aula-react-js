import React, { Fragment } from 'react'
import './Anuncio.css'
import aula from './aula_virtual.svg'

const Anuncio = () => {
    return(
        <Fragment>
            <div className="anuncio">
                <h2 className="titulo">Aula virtual</h2>
                <div className="content-anuncio">
                    <img src={aula} alt="aula_virtual" className="anuncio-imagen"/>
                    <div className="anuncio-textos">
                        <h3><span></span>Una aula virtual puede ser muy conveniente...</h3>
                        <p>¡Déjanos contarte de manera explicita lo genial que puede ser!</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Anuncio