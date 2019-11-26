import React from 'react';
import {BrowserRouter as Router,Route, NavLink,Redirect,Switch} from 'react-router-dom';
import Home from './views/Home';
import Detail from './views/Detail';
import Login from './views/Login';
import Register from './views/Register';
import Cart from './views/Cart';

function App() {
  return (
    <div>
     
      <Router>
        <div>
        <Switch> 
          <Route path="/login" component={Login}></Route>
          <Route path="/Register" component={Register}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>    
          <Route path="/Cart" component={Cart}></Route>   
          <Redirect to="/Home"/>
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
