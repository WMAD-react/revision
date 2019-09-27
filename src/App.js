import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import Feedback from './pages/Feedback/Feedback';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Header from './Header/Header.jsx'; 
import './Header/Header.css';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Header />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/explore' component={Explore} />
            <Route path='/feedback' component={Feedback} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
