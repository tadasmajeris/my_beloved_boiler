import React, { Component } from 'react';
import Boilers from './components/Boilers';
import './App.css';

class App extends Component {
  state = {
    boilers: [
      {
        id: 1,
        artist: 'DJ Stingray',
        location: 'Amsterdam',
        year: 2016,
        youtubeId: '4913D3PgkhM'
      },
      {
        id: 2,
        artist: 'Or:la',
        location: 'Moscow',
        year: 2018,
        youtubeId: 'J7HizbJ11YU'
      },
      {
        id: 3,
        artist: 'Danny Daze',
        location: 'Amsterdam',
        year: 2018,
        youtubeId: 'wOXrY4fQgug'
      },
    ]
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
