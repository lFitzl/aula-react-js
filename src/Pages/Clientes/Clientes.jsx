import React from 'react';
import Navegador from '../../Components/Navegador/Navegador'
import Footer from '../../Components/Footer/Footer'
import Portada from '../../Components/Portada/Portada'
import Cliente from '../../Components/Cliente/Cliente';

const Clientes = () => {
    return(
        <>
            <Navegador nav="clientes"/>
            <Portada
                tit1="¿Qué esperas?"
                tit2="Ejecuta tus proyectos"
                ruta="/Servicios"/>
            <Cliente/>
            <Footer/>
        </>
    )
}

export default Clientes