import React from 'react';
import './Footer.css'
import logo from './logo.png'
import {Link} from 'react-router-dom'
import FormNovedades from '../Footer/FormNovedades/FormNovedades'

const Footer = () => {
    return(
        <footer>
        <div className="footer-container">
            <div className="left-col">
                <img src={logo} alt="logo" className="logo"/>
                <div className="social-media">
                    <Link to="/Proximamente"><i className="icon-m icon-facebook"></i></Link>
                    <Link to="/Proximamente"><i className="icon-m icon-instagram"></i></Link>
                    <Link to="/Proximamente"><i className="icon-m icon-youtube"></i></Link>
                    <a href="https://github.com/lFitzl"><i className="icon-m icon-github"></i></a>
                    <Link to="/Proximamente"><i className="icon-m icon-discord"></i></Link>
                </div>
                <p className="right-text">@2020 Creado por Fitz</p>
            </div>
            <div className="right-col">
                <h1>Novedades</h1>
                <div className="border"></div>
                <p>Coloca tu email y recibe nuestras futuras actualizaciones.</p>
                <FormNovedades/>
            </div>
        </div>
    </footer>
    )
}

export default Footer;