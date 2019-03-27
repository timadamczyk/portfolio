import React from 'react';

const Navigation = ({onChangeAbout, onChangeProjects}) => {

    return (
        <nav className="pa3 pa4-ns">
        <p className="link dim black b f6 f5-ns dib mr3" href="#" title="Home">Tim Adamczyk</p>
        <a
        onClick = {onChangeAbout}
        className="link dim gray    f6 f5-ns dib mr3" 
        href="#" 
        title="About">
        About</a>
        <p 
        onClick = {onChangeProjects}
        className="link dim gray    f6 f5-ns dib mr3" 
        href="#" 
        title="Store">
        Projects</p>
      </nav>
    );
}
export default Navigation; 

