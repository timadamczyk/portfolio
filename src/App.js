import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'projects'
    }
  }

  onChangeAbout = () => {
    this.setState({route: 'about'});
  }

  onChangeProjects = () => {
    this.setState({route: 'projects'});
  }

render() { 
    return (
      <div>
      <Navigation  onChangeAbout={this.onChangeAbout} onChangeProjects={this.onChangeProjects}/> 
     { this.state.route === 'projects' ? <Projects /> : <About />} 
      <Footer /> 
      </div>
    );
  }
}



export default App;
