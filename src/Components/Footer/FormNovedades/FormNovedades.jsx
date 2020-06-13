import React from 'react'

const datosIniciales = {
    email: '',
    emailError: ''
}

export default class FormNovedades extends React.Component{
    state = datosIniciales

    handleInputChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    enviarEmail = (e) => {
        e.preventDefault()
        const esValido = this.validacion();
        if (esValido) {
            this.setState(datosIniciales)
        }
    }

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
            <form  
                onSubmit={this.enviarEmail}
                className="novedades-form">
                    <input 
                        type="text" 
                        className="txte form-control" 
                        placeholder="Ingresa tu email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}/>
                    <span className="incorrecto">{this.state.emailError}</span>
                    <button type="submit" className="btn-s">Enviar</button>
            </form>
        )
    }
}