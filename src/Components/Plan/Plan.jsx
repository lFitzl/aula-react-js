import React from 'react';
import './Plan.css'
import Opcion from './Opcion/Opcion'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import basico from './basico.svg'
import pro from './pro.svg'
import master from './master.svg'
import Explicacion from './Explicacion/Explicacion'

class Plan extends React.Component{
    render(){
        const config = {
            dots: false,
            fade: true, 
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrow: true,
            slidesToScroll: 1,
            className: "slides"
        }
        return(
            <div className="planes">
                <h1 className="p-titulo">Planes</h1>
                <p className="p-intro">¡Observa los distintos planes y selecciona el que más te convenga!</p>
                <div className="plan">

                    <Slider {...config}>
                        <Opcion
                            clase="basico"
                            plan={basico}
                            nombre="Básico"
                            tiempo="1 mes"
                            precio="250 soles"
                            det1="Alumnos"
                            cant1="30"
                            det2="Almacenamiento"
                            cant2="50GB"
                            det3="Login"
                            cant3="sí"
                            det4="Panel de Control"
                            cant4="sí"
                            det5="Tipos de archivos"
                            cant5="Todos"
                            />
                        <Opcion
                            clase="pro"
                            plan={pro}
                            nombre="PRO"
                            tiempo="1 mes"
                            precio="350 soles"
                            det1="Alumnos"
                            cant1="55"
                            det2="Almacenamiento"
                            cant2="80GB"
                            det3="Login"
                            cant3="sí"
                            det4="Panel de Control"
                            cant4="sí"
                            det5="Tipos de archivos"
                            cant5="Todos"
                            det6="Informes"
                            cant6="sí"
                            det7="Soporte"
                            cant7="24/7"
                            />
                        <Opcion
                            clase="master"
                            plan={master}
                            nombre="MASTER"
                            tiempo="1 mes"
                            precio="450 soles"
                            det1="Alumnos"
                            cant1="80"
                            det2="Almacenamiento"
                            cant2="100GB"
                            det3="Login"
                            cant3="sí"
                            det4="Panel de Control"
                            cant4="sí"
                            det5="Tipos de archivos"
                            cant5="Todos"
                            det6="Informes"
                            cant6="sí"
                            det7="Soporte"
                            cant7="24/7"
                            det8="App Móvil"
                            cant8="sí"
                            det9="Personalización"
                            cant9="Full"
                            />
                    </Slider>
                    <span className="aviso">¡Deslizate y/o toca cerca del nombre del plan para descubrir los detalles! <b>↑</b> </span>
                    <Explicacion/>
                </div>
            </div>
        )   
    }
}

export default Plan