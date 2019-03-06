import React from 'react';

const BoilerTV = ({youtubeId}) => (
  <div>
    <iframe
      width="621" height="400" title='boilerTV'
      src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0" allowFullScreen>
    </iframe>
  </div>
);

export default BoilerTV;
