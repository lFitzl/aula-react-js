import React, {Fragment} from 'react';
import './DetallesServicios.css'
import Aplicacion from '../Aplicacion/Aplicacion'
import aula1 from './aula_virtual1.svg'
import aula2 from './aula_virtual2.svg'
import aula3 from './aula_virtual3.svg'
import OtrosServicios from '../OtrosServicios/OtrosServicios';
import {Link} from 'react-router-dom'

const DetallesServicios = ({precios, proximamente}) => {
    return(
        <Fragment>
            <div className="servicios">
                <h1>Aula virtual</h1>
                <span>¡Sepa los beneficios de usar este servicio!</span>
                <Aplicacion
                    img={aula1}
                    tit1="Sin barreras."
                    text1 ="Un aula virtual permite al estudiante superar barreras de comunicación, ubicación, tiempo y costo."
                    tit2="Ahorro de tiempo y dinero."
                    text2="Desplazarte a otro lugar para recibir o dar clases y/o capacitaciones quita tiempo pero con una aula virtual: ¡no!"/>
                <Aplicacion
                    img = {aula2}
                    tit1="Más variedad."
                    text1 ="Un aula virtual es una gran herramienta para desplegar la creatividad de los instructores con todo tipo de audios, vídeos, etc."
                    tit2="Aprendizaje personalizado."
                    text2="Puede distribuir distintos documentos y clases complementarias de acuerdo al tipo de alumno."/>
                <Aplicacion
                    img = {aula3}
                    tit1="Retroalimentación"
                    text1 ="En el aula virtual el tutor está disponible en vivo durante las clases y casi todo el tiempo a través de correo electrónico, chats o foros."
                    tit2="Adaptabilidad"
                    text2="El e-learning es el futuro de la educación y que mejor que adquirir una aula virtual y... ¡Ser parte del cambio!"/>
                    
                    <div className="decidido">
                        <p className="mx-auto">¿Convencido?</p>
                        <Link to={precios} type="button" className="btn-decidido">Click aquí y: ¡Obtén desde ahora un aula virtual!</Link>
                    </div>
            </div>
            <OtrosServicios
                ruta={proximamente}/>
        </Fragment>
    )
}

export default DetallesServicios