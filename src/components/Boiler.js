import React from 'react';

const Boiler = ({boiler}) => (
  <div className='boiler'>
    <img src={`https://img.youtube.com/vi/${boiler.youtubeId}/0.jpg`} height='135' alt='thumb'/>
    <h1>{boiler.artist}</h1>
    <h3>{boiler.location}</h3>
    <h4>{boiler.year}</h4>
  </div>
);

export default Boiler;
