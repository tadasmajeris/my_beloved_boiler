import React from 'react';

const Boiler = ({boiler}) => (
  <div className='boiler' onClick={e=>clickHandler(e, boiler.youtubeId)}>
    <img src={`https://img.youtube.com/vi/${boiler.youtubeId}/0.jpg`} height='135' width='180' alt='thumb'/>
    <h1>{boiler.artist}</h1>
    <h3>{boiler.location}</h3>
    <h4>{boiler.year}</h4>
  </div>
);

const clickHandler = (e, youtubeId) => {
  e.stopPropagation();
  window.open(`https://youtube.com/watch?v=${youtubeId}`, '_blank');
}

export default Boiler;
