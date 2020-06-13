import React, { Fragment } from 'react'
import Muestras from '../OtrosServicios/Muestras/Muestras'
import data from './data.svg'
import './Cliente.css'

const Cliente = () => {
    return(
        <Fragment>
            <section className="client">
                <div className="contenedor">
                    <h2 className="titulo">¡Nuestros clientes y sus testimonios!</h2>
                    <div className="galeria">
                        <Muestras
                            servicio={data}
                            ruta="#cliente1"
                            nombre="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos nihil praesentium at aperiam"/>

                        <Muestras
                            servicio={data}
                            ruta="/#cliente2"
                            nombre="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos nihil praesentium at aperiam"/>
                        <Muestras
                            servicio={data}
                            ruta="#cliente3"
                            nombre="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos nihil praesentium at aperiam"/>
                        <Muestras
                            servicio={data}
                            ruta="#cliente4"
                            nombre="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos nihil praesentium at aperiam,"/>
                        <Muestras
                            servicio={data}
                            ruta="#cliente5"
                            nombre="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos nihil praesentium at aperiam"/>
                        <Muestras
                            servicio={data}
                            ruta="#cliente6"
                            nombre="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos nihil praesentium at aperiam"/>
                        <Muestras
                            servicio={data}
                            ruta="#cliente7"
                            nombre="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos nihil praesentium at aperiam"/>
                        <Muestras
                            servicio={data}
                            ruta="#cliente8"
                            nombre="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos nihil praesentium at aperiam"/>
                    </div>  
                </div>
            </section>
        </Fragment>
    )
}

export default Cliente