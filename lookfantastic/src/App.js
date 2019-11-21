import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './views/Header' 


function App() {
  return (
    <div>
      <Header/>
        <Router>
          <div>
        
            <Switch>
              <Route path="/Header" component={Header}></Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
