import React from 'react';
import Boiler from './Boiler';

const Boilers = ({boilers}) => (
  boilers.map(boiler =>
    <Boiler boiler={boiler} key={boiler.id} />
  )
);

export default Boilers;
