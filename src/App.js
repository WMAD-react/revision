import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Explore from './components/Explore/Explore';
import Feedback from './components/Feedback/Feedback';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/explore' component={Explore} />
            <Route path='/feedback' component={Feedback} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
