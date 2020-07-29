import React from 'react';
import './App.scss';
import {HashRouter,Route} from "react-router-dom";
import {Home} from "./components/Home"
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Logout} from "./components/Logout";
import {Form} from "./components/Form";

function App() {
  return (
      <HashRouter>
          <>
              <Route exact path='/' component={Home}/>
              <Route path='/logowanie' component={Login}/>
              <Route path='/rejestracja' component={Register}/>
              <Route path='/wylogowanie' component={Logout} />
              <Route path='/formularz' component={Form} />
          </>

      </HashRouter>
  );
}

export default App;
