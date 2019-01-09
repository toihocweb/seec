import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Darkbg from '../components/Darkbg/Darkbg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Portfolio />
        <Darkbg />
      </div>
    );
  }
}

export default App;
