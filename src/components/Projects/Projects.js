import React from 'react';
import Tachyons from 'tachyons';

const Projects = () => {
    return (
    
    <div>
    <article className="cf ph3 ph5-ns pv5"> 
     <header className="fn fl-ns w-50-ns pr4-ns">
    <h1 className="mb3 mt0 lh-title">Projects</h1>
    <time className="f6 ttu tracked gray">Art and Coding Projects</time>
    </header>
     </article>
        <main className="mw6 center">
  <article>
  
    <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
      <div className="dtc w3">
        <img src="http://mrmrs.github.io/images/0010.jpg" className="db w-100"/>
      </div>
      <div className="dtc v-top pl2">
        <h1 className="f6 f5-ns fw6 lh-title black mv0">FaceSpacePlace</h1>
        <h2 className="f6 fw4 mt2 mb0 black-60">a face detection app using the Clarifai API</h2>
        <h2 className="f6 fw4 mt2 mb0 black-60">React, Node, Express, Prostgres</h2>

      </div>
    </a>
  </article>
  <article>
    <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
      <div className="dtc w3">
        <img src="http://mrmrs.github.io/images/0002.jpg" className="db w-100"/>
      </div>
      <div className="dtc v-top pl2">
        <h1 className="f6 f5-ns fw6 lh-title black mv0">History of the Poster</h1>
        <h2 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
        <dl className="mt2 f6">
          <dt className="clip">Price</dt>
          <dd className="ml0">$15.00</dd>
        </dl>
      </div>
    </a>
  </article>
  <article>
    <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
      <div className="dtc w3">
        <img src="http://mrmrs.github.io/images/0004.jpg" className="db w-100"/>
      </div>
      <div className="dtc v-top pl2">
        <h1 className="f6 f5-ns fw6 lh-title black mv0">Graphic Design in IBM: Typography, Photography, and Illustration</h1>
        <h2 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
        <dl className="mt2 f6">
          <dt className="clip">Price</dt>
          <dd className="ml0">$15.00</dd>
        </dl>
      </div>
    </a>
  </article>
  <article>
    <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
      <div className="dtc w3">
        <img src="http://mrmrs.github.io/images/0006.jpg" className="db w-100"/>
      </div>
      <div className="dtc v-top pl2">
        <h1 className="f6 f5-ns fw6 lh-title black mv0">Fotoplakate: Von den Anfängen</h1>
        <h2 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
        <dl className="mt2 f6">
          <dt className="clip">Price</dt>
          <dd className="ml0">$15.00</dd>
        </dl>
      </div>
    </a>
  </article>
  <article>
    <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
      <div className="dtc w3">
        <img src="http://mrmrs.github.io/images/0030.jpg" className="db w-100"/>
      </div>
      <div className="dtc v-top pl2">
        <h1 className="f6 f5-ns fw6 lh-title black mv0">The Graphic Artist</h1>
        <h2 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
        <dl className="mt2 f6">
          <dt className="clip">Price</dt>
          <dd className="ml0">$15.00</dd>
        </dl>
      </div>
    </a>
  </article>
  <article className="mt2">
    <a className="link dt w-100 bb b--black-10 dim blue" href="#0">
      <div className="dtc w3">
        <img src="http://mrmrs.github.io/images/0010.jpg" className="db w-100"/>
      </div>
      <div className="dtc v-top pl2">
        <h1 className="f6 f5-ns fw6 lh-title black mv0">A History of Visual Communication (Geschichte der visuellen Kommunikation)</h1>
        <h2 className="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
        <dl className="mt2 f6">
          <dt className="clip">Price</dt>
          <dd className="ml0">$15.00</dd>
        </dl>
      </div>
    </a>
  </article>
</main>
</div> 

    );
}

export default Projects; 
