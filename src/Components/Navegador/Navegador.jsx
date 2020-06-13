import React from 'react'
import './Nav.css'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import * as bootstrap from 'react-bootstrap'

class Navegador extends React.Component {
    render() {
        return (
            <bootstrap.Navbar collapseOnSelect expand="lg" variant="dark">
                <bootstrap.Navbar.Brand className="nav-logo">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </bootstrap.Navbar.Brand>
                <bootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <bootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <bootstrap.Nav className="mr-auto navegador">
                        <bootstrap.Nav.Item><Link to="/">Inicio</Link></bootstrap.Nav.Item>
                        <bootstrap.Nav.Item><Link to="/Servicios">Servicios</Link></bootstrap.Nav.Item>
                        <bootstrap.Nav.Item><Link to="/Precio">Precio</Link></bootstrap.Nav.Item>
                        <bootstrap.Nav.Item><Link to="/Clientes">Clientes</Link></bootstrap.Nav.Item>
                    </bootstrap.Nav>
                    <bootstrap.Nav>
                        <bootstrap.Nav.Item>
                            <Link to="/Contacto" className="btn-contact">Contacto</Link>
                        </bootstrap.Nav.Item>
                    </bootstrap.Nav>
                </bootstrap.Navbar.Collapse>
            </bootstrap.Navbar>
        )
    }
}
export default Navegador;
