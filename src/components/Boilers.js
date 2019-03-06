import React from 'react';
import Boiler from './Boiler';

const Boilers = ({boilers}) => (
  boilers.map((boiler, i) =>
    <Boiler boiler={boiler} key={i} />
  )
);

export default Boilers;
