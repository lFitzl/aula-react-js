import React from 'react';
import Navegador from '../../Components/Navegador/Navegador'
import Footer from '../../Components/Footer/Footer'
import Portada from '../../Components/Portada/Portada'
import Plan from '../../Components/Plan/Plan'

const Precios = () => {
    return(
        <>
            <Navegador nav="precio"/>
            <Portada
                tit1="¡Nuestros clientes "
                tit2="nos respaldan!"
                ruta="/Clientes"
                />
            <Plan/>
            <Footer/>
        </>
    )
}

export default Precios
