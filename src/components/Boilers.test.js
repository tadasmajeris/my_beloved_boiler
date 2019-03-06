import React from 'react';
import ReactDOM from 'react-dom';
import Boilers from './Boilers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const boilers = [
    {
      id: 1,
      artist: 'Artist',
    },
    {
      id: 2,
      artist: 'Artist 2',
    }
  ];

  ReactDOM.render(<Boilers boilers={boilers}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
