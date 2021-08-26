import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Marketing from './components/pages/Marketing';
import Training from './components/pages/Training';
import Consulting from './components/pages/Consulting';
import Anything from './components/pages/Anything';


function App() {
  return (
    
       <Router>
       <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/services' exact component={Services} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/marketing' exact component={Marketing} />
        <Route path='/training' exact component={Training} />
        <Route path='/consulting' exact component={Consulting} />
        <Route path='/anything' exact component={Anything} />
      </Switch>
       </Router>
       
         
         
  
  );
}

export default App;
