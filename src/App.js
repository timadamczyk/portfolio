import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'projects'
  } 

    return (
      <div>
      <Navigation /> 
     { this.state.route === 'projects' ? <div> <Projects /> </div> :
       <div> <About/> </div> } 
      <Footer /> 
      </div>
    );
  }
}

export default App;
