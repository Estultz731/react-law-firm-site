import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Nav = () => 
  (<nav>
    <a className="left" href="#law">Acme Law</a>
    <a className="right" href="#contact">Contact</a>
    <a className="right" href="#social">Social</a>
  </nav>
  )
class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <div className="hero-image">
                <img className="hero" src="./images/heroimage.jpg" />
              </div>
            </div>
            <div className="col-sm-12 col-lg-8">
              <div className="hero-text">
                <h1>Acme Law Firm</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
