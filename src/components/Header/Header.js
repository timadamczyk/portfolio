import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
  return (
        <ul className="pa3 pa4-ns" >

        
        <Link to="/"><li className="link dim black b f6 f5-ns dib mr3" >Tim Adamczyk </li></Link>
        
          <Link to="/"><li className="link dim gray    f6 f5-ns dib mr3" >Projects </li></Link>
 
        
          <Link to="/about"><li className="link dim gray    f6 f5-ns dib mr3">About </li></Link>
      
      </ul>
    );
}
}

export default Header; 

