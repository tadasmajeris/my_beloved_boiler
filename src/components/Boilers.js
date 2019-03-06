import React from 'react';
import Boiler from './Boiler';

const Boilers = ({boilers, onClick}) => (
  boilers.map(boiler =>
    <Boiler boiler={boiler} key={boiler.id} onClick={onClick} />
  )
);

export default Boilers;
