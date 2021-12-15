import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './modules/layouth/Navbar';
import PropietariosScreen from './modules/propietarios/screens/PropietariosSreen';
import EventosScreen from './modules/eventos/screens/EventosScreen';
//import HinchasScreen from './modules/hinchas/screens/HinchasScreen';
import SociosScreen from './modules/socios/screens/SociosScreen';
import Contacto from './modules/contacto/screens/Contacto';

function App() {
  return (
    <div className="main-wrapper">
      <BrowserRouter>
        <Navbar />
        <div>
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <EventosScreen />
            </Route>
            <Route path="/eventos">
              <EventosScreen />
            </Route>
            <Route path="/propietarios">
              <PropietariosScreen />
            </Route>
            <Route path="/socios">
              <SociosScreen />
            </Route>
            {/* <Route path="/hinchas">
              <HinchasScreen />
            </Route> */}
            <Route path="/contacto">
              <Contacto />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
