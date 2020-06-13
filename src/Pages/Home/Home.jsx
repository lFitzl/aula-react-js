import React, {Fragment} from 'react'
import Portada from '../../Components/Portada/Portada'
import Notification from '../../Components/Notification/Notification'
import Navegador from '../../Components/Navegador/Navegador'
import Anuncio from '../../Components/Anuncio/Anuncio'
import Footer from '../../Components/Footer/Footer'
import notimg_1 from './not-img1.png'

const Home = () => {
    return(
        <Fragment>
            <Navegador nav="inicio"/>
            <Portada
                tit1="La tecnología"
                tit2 ="abre nuevas posibilidades..."
                ruta="/Clientes"/>
            <Anuncio/>
            <Notification
                ruta = "/Servicios"
                anuncio="¡Informate más sobre nuestros servicios!"
                img = {notimg_1}/>
            <Footer/>
        </Fragment>
    )
}

export default Home;