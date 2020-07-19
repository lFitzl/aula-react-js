import React from 'react'
import FormContact from '../../Components/FormContacto/FormContacto'
import Navegador from '../../Components/Navegador/Navegador'
import Footer from '../../Components/Footer/Footer'
import Portada from '../../Components/Portada/Portada'

const Contacto = () => {
    return(
        <>
            <Navegador/>
            <Portada
                tit1="Observa nuestras"
                tit2="ofertas."
                ruta="/Precio"
            />
            <FormContact/>
            <Footer/>
        </>
    )
}

export default Contacto;