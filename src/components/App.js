import React, { Component } from 'react';
import Boilers from './Boilers';
import './App.css';

class App extends Component {
  state = {
    boilers: []
  }

  componentDidMount() {
    this.getBoilers();
  }

  getBoilers = _ => {
    fetch('http://localhost:5000/api/boilers')
      .then(res => res.json())
      .then(boilers => this.setState({boilers}))
  }

  render() {
    return (
      <div className="App">
        <Boilers boilers={this.state.boilers}/>
      </div>
    );
  }
}

export default App;
