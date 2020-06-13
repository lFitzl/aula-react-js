import React from 'react';
import Aplicacion from '../../Aplicacion/Aplicacion'
import files from './files.svg'
import inform from './inform.svg'
import movil from './movil.svg'
import './Explicacion.css'

const Explicacion = () => {
    return(
        <div className="explicacion">
            <h1>Detalles a tener en cuenta. . .</h1>
            <Aplicacion
                img={files}
                tit1="Tipos de archivos"
                clase="orange"
                text1="El aula virtual soporta toda extensión de vídeo, audio y de documentos. ¿Deseas pasar comprimidos? También se puede."
                tit2="Panel de Control"
                text2="El aula virtual será parte de una interfaz aún mayor tipo plataforma donde podrás administrar las sesiones y mucho más."/>

            <Aplicacion
                img={inform}
                tit1="Soporte"
                clase="red"
                text1="¿Ocurrió algún problema? No te preocupes. Estamos para lo que necesites 24/7."
                tit2="Informes"
                text2="Recibe informes de las interacciones de tus alumnos de manera automática."/>

            <Aplicacion
                img={movil}
                tit1="App movil"
                clase="purple"
                text1="¡La plataforma junto con el aula virtual llegan al siguiente nivel! Una aplicación para el instructor y otra para los alumnos."
                tit2="Personalización"
                text2="La plataforma se acomoda a ti y tú no a ella. Elige entre colores, estilos y más..."/>
        </div>
    )
}

export default Explicacion