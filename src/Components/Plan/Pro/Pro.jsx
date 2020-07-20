import React from 'react';
import Detalles from '../Detalles/Detalles';
import { Link } from 'react-router-dom'
import pro from './pro.svg'

const Pro = (props) => {
    return (
        <div className="opcion">
            <div className="pro">
                <div className="imgLg">
                    <img src={pro} alt="plan" />
                </div>
                <div className="opcion-content">
                    <h2>Pro</h2>
                    <p>{props.precio}</p>
                    <Detalles
                        det={props.det1}
                        value={props.cant1} />
                    <Detalles
                        det={props.det2}
                        value={props.cant2} />
                    <Detalles
                        det={props.det3}
                        value={props.cant3}
                        check={props.cant3} />
                    <Detalles
                        det={props.det4}
                        value={props.cant4}
                        check={props.cant4} />
                    <Detalles
                        det={props.det5}
                        value={props.cant5}
                        check="si" />
                    <Detalles
                        det={props.det6}
                        value={props.cant6}
                        check={props.cant6} />
                    <Detalles
                        det={props.det7}
                        value={props.cant7}
                        check="si" />
                    <br />
                    <Link to="/Compra" className="btn-compra" >¡Adquierelo aquí!</Link>
                </div>
            </div>
        </div>
    );
}

export default Pro