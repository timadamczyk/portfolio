import React, { Component } from 'react';
import Tachyons from 'tachyons';

class Footer extends Component {

    render() { 
    return (
    <footer className="bg-near-black white-80 pv5 pv6-l ph4">
    <p className="f6"><span className="dib mr4 mr5-ns">©2019 tim adamczyk</span>
    <a className="link white-80 hover-light-purple" href="/art">art</a> /
    <a className="link white-80 hover-gold" href="/resume"> resume </a> /
    <a className="link white-80 hover-green" href="/callme" > call me </a>
  </p>
</footer>

    );
} }

export default Footer; 

