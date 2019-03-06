const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/boilers', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Cache-Control, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  
  const boilers = [
    {
      id: 1,
      artist: 'DJ Stingray',
      location: 'Amsterdam',
      year: 2016,
      youtubeId: '4913D3PgkhM'
    },
    {
      id: 2,
      artist: 'Or:la',
      location: 'Moscow',
      year: 2018,
      youtubeId: 'J7HizbJ11YU'
    },
    {
      id: 3,
      artist: 'Danny Daze',
      location: 'Amsterdam',
      year: 2018,
      youtubeId: 'wOXrY4fQgug'
    }
  ];

  res.json(boilers);

  console.log('REQ: Boilers requested');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

const port = process.env.port || 5000;

app.listen(port);
console.log('server started. listening on port: ', port);
