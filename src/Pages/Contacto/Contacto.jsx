import React, {Fragment} from 'react'
import FormContact from '../../Components/FormContacto/FormContacto'
import Navegador from '../../Components/Navegador/Navegador'
import Footer from '../../Components/Footer/Footer'
import Portada from '../../Components/Portada/Portada'

const Contacto = () => {
    return(
        <Fragment>
            <Navegador/>
            <Portada
                tit1="Observa nuestras"
                tit2="ofertas."
                ruta="/Precio"
            />
            <FormContact/>
            <Footer/>
        </Fragment>
    )
}

export default Contacto;