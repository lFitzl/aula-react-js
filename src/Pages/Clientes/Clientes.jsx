import React, {Fragment} from 'react';
import Navegador from '../../Components/Navegador/Navegador'
import Footer from '../../Components/Footer/Footer'
import Portada from '../../Components/Portada/Portada'
import Cliente from '../../Components/Cliente/Cliente';

const Clientes = () => {
    return(
        <Fragment>
            <Navegador nav="clientes"/>
            <Portada
                tit1="¿Qué esperas?"
                tit2="Ejecuta tus proyectos"
                ruta="/Servicios"/>
            <Cliente/>
            <Footer/>
        </Fragment>
    )
}

export default Clientes