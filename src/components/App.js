import React, { Component } from 'react';
import Boilers from './Boilers';
import BoilerTV from './BoilerTV';
import './App.css';

class App extends Component {
  state = {
    boilers: [],
    selectedYoutubeId: ''
  }

  componentDidMount() {
    this.getBoilers();
  }

  getBoilers = _ => {
    fetch('http://localhost:5000/api/boilers')
      .then(res => res.json())
      .then(boilers => this.setState({boilers}))
  }

  onBoilerClick(selectedYoutubeId) {
    this.setState({selectedYoutubeId});
  }

  render() {
    return (
      <div className="App">
        {this.state.selectedYoutubeId ? <BoilerTV youtubeId={this.state.selectedYoutubeId} /> : ''}
        <Boilers boilers={this.state.boilers} onClick={this.onBoilerClick.bind(this)} />
      </div>
    );
  }
}

export default App;
