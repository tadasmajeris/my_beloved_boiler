import React from 'react';

const Boiler = ({boiler}) => (
  <div>
    <img src={`https://img.youtube.com/vi/${boiler.youtubeId}/0.jpg`} height='135'/>
    <h1>{boiler.artist}</h1>
    <h2>{boiler.location}</h2>
    <h3>{boiler.year}</h3>
  </div>
);

export default Boiler;
