import React, {Fragment} from 'react';
import Navegador from '../../Components/Navegador/Navegador'
import Portada from '../../Components/Portada/Portada'
import Footer from '../../Components/Footer/Footer'
import DetallesServicios from '../../Components/DetallesServicio/DetallesServicios'

const Servicios = () => {
    return(
        <Fragment>
            <Navegador nav="servicios"/>
            <Portada
                tit1="Te ayudamos con "
                tit2="todo lo necesario."
                ruta="/Precio"/>
            <DetallesServicios
                ruta="/Proximamente"/>
            <Footer/>
        </Fragment>
    )
}

export default Servicios