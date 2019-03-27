import React , {component} from 'react';
import Tachyons from 'tachyons';

const Navigation = () => {
    return (
        <nav class="pa3 pa4-ns">
        <a class="link dim black b f6 f5-ns dib mr3" href="#" title="Home">Tim Adamczyk</a>
        <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="About">About</a>
        <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">Projects</a>
        <a class="link dim gray    f6 f5-ns dib" href="#" title="Contact">Contact</a>
      </nav>
    );
}

export default Navigation; 

