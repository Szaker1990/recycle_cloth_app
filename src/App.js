import React from 'react';
import './App.scss';
import photo from "./assets/photo.png";
import {HashRouter,Route} from "react-router-dom";
import {Home} from "./components/Home"
import {Login} from "./components/Login";
import {Register} from "./components/Register";

function App() {
  return (
      <HashRouter>
          <>
              <Route exact path='/' component={Home}/>
              <Route path='/logowanie' component={Login}/>
              <Route path='/rejestracja' component={Register}/>
          </>

      </HashRouter>
  );
}

export default App;
