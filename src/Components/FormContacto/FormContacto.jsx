import React from "react"
import './FormContacto.css'

const datosIniciales = {
    nombre: '',
    email: '',
    asunto: '',
    emailError: ''
}

export default class FormContacto extends  React.Component{
    state = datosIniciales
    

    handleInputChange = (e) =>{
        // console.log(e.target.value)
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    
    enviarDatos = (e) => {
        e.preventDefault()
        const esValido = this.validacion();
        if (esValido) {
            this.setState(datosIniciales)
        }
    }

    //Función para validar si los datos del email son correctos permitiendo ".com" o ".es"
    validacion = () => {
        let emailError =''
        let posicion = this.state.email.length - 1

        if(this.state.email.indexOf(".") <= 0){
            emailError = "No es una dirección válida"
        }

        if (this.state.email.charAt(posicion - 1) === ".") {
            emailError = "No es una dirección válida"
        }

        if (emailError){
            this.setState({emailError})
            return false;
        }
        
        return true
    }

    render(){
        return(
            <div className="contacto">
                <div className="content">
                    <div id="form" className="container">
                        <div className="card-body">
                            <h1>Contacto</h1>
                            <span>¿Dudas y/o consultas?</span>
                            <h6>¡Enviénos su mensaje! No tardaremos en responder</h6>
                            <br/>
                            <form onSubmit={this.enviarDatos}>
                                <div className="form-group">
                                    <label>Nombre: </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        name="nombre"
                                        value={this.state.nombre}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email: </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        required
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                    />
                                    <span className="incorrecto">{this.state.emailError}</span>
                                </div>
                                <div className="form-group">
                                    <label>Asunto: </label>
                                    <textarea
                                        maxLength="1000"
                                        className="form-control"
                                        required
                                        name="asunto"
                                        value={this.state.asunto}
                                        onChange={this.handleInputChange}
                                    />        
                                </div>
                                <button 
                                    className="btn btn-success"
                                    type="submit"
                                >Enviar</button>
                            </form>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }

}