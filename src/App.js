import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import Feedback from './pages/Feedback/Feedback';
import Header from './components/Header/Header.jsx'; 

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/explore' component={Explore} />
          <Route path='/feedback' component={Feedback} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
