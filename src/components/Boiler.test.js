import React from 'react';
import ReactDOM from 'react-dom';
import Boiler from './Boiler';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const boiler = {
    id: 1,
    artist: 'Artist',
    location: 'UK',
    year: 2018
  };
  
  ReactDOM.render(<Boiler boiler={boiler}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
