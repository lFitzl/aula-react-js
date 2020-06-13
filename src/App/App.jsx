import React from 'react'
import './App.css'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Pages/Home/Home'
import NotFound from '../Pages/NotFound/NotFound'
import Servicios from '../Pages/Servicios/Servicios'
import Clientes from '../Pages/Clientes/Clientes'
import Contacto from '../Pages/Contacto/Contacto'
import Proximamente from '../Pages/Proximamente/Proximamente'
import Precios from '../Pages/Precios/Precios';

function App(){
    return(
        <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Servicios" component={Servicios}/>
                    <Route exact path="/Clientes" component={Clientes}/>
                    <Route exact path="/Precio" component={Precios}/>
                    <Route exact path="/Contacto" component={Contacto}/>
                    <Route exact path="/Proximamente" component={Proximamente}/>
                    <Route exact path="/404" component={NotFound} />
                    <Redirect from="*" to="/404"/>
                </Switch>
        </BrowserRouter>
    )
}

export default App;