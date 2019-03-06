import React from 'react';

const Boiler = ({boiler, onClick}) => (
  <div className='boiler' onClick={() => onClick(boiler.youtubeId)}>
    <img src={`https://img.youtube.com/vi/${boiler.youtubeId}/0.jpg`} height='135' width='180' alt='thumb'/>
    <h1>{boiler.artist}</h1>
    <h3>{boiler.location}</h3>
    <h4>{boiler.year}</h4>
  </div>
);

export default Boiler;
