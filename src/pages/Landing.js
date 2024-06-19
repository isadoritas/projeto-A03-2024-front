import React from "react";
import './Landing.css';

export default function Landing() {
  return (
    <div className="intro-home">
      <header id="showcase-header" className="showcase">
        <div id="showcase-top" className="showcase-top">
          <img style={{marginTop: '-100px'}}src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
          <a href="#" id="sign-in-btn" className="btn btn-rounded">Sign In</a>
        </div>
        <div id="showcase-content" className="showcase-content">
          <div className="title-logo-wrapper">
            <img src={process.env.PUBLIC_URL + '/logo_transparent.png'} alt="logo" className="title-logo"/>
            <h1>NextMovies</h1>
          </div>
          <p>Your ultimate film organizer</p>
          <p>Search and save your favorite movies to a personalized list.</p>
          <a href="/home" id="enter" className="btn btn-xl">
            SEE MORE <i className="fas fa-chevron-right btn-icon"></i>
          </a>
        </div>
      </header>
    </div>
  );
}
