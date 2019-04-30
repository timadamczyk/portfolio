import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Tachyons from "tachyons";
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

class App extends Component {

render() { 
    return (
      <Router>
      <div>
        <Header />
        <Route exact path = "/" component={Projects} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
