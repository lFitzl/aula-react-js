import React from 'react';
import './OtrosServicios.css'
import Muestras from './Muestras/Muestras'
import img1 from './desarrollo_web.svg'
import img2 from './data.svg'
import img3 from './IA.svg'
import img4 from './react.svg'

const OtrosServicios = ({ruta}) =>{
    return(
        <section className="otroServicios">
            <div className="contenedor">
                <h2 className="titulo">¡Más servicios!</h2>
                <span className="sub-titulo">Anímate a explorar mucho más nuestra competitividad</span>
                <div className="galeria">
                    <Muestras
                        ruta={ruta}
                        servicio={img1}
                        nombre="Desarrollo Web"/>
                    <Muestras
                        ruta={ruta}
                        servicio={img2}
                        nombre="Ánalisis de Datos"/>
                    <Muestras
                        ruta={ruta}
                        servicio={img3}
                        nombre="Inteligencia Artificial"/>
                    <Muestras
                        ruta={ruta}
                        servicio={img4}
                        nombre="Cursos"/>
                </div>
            </div>
        </section>
    )
}

export default OtrosServicios