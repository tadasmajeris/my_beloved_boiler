import React, { Component } from 'react';

class Boilers extends Component {

  render() {
    return this.props.boilers.map((boiler, i)=>(
      <div key={i}>
        <img src={`https://img.youtube.com/vi/${boiler.youtubeId}/0.jpg`} height='135'/>
        <h1>{boiler.artist}</h1>
        <h2>{boiler.location}</h2>
        <h3>{boiler.year}</h3>
      </div>
    ));
  }
}

export default Boilers;
