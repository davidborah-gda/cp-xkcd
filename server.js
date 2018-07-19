
const express = require('express');

const axios = require('axios');

const server = express();

const port = process.env.PORT || 7042;

server.get('/', (requestAnimationFrame, response) => {
  response.send('Hey!!! This is working!');
});

server.get('/comic', (requestAnimationFrame, response) => {
  const url = 'https://xkcd.com/614/info.0.json';
  axios.get(url)
    .then((comicResponse) => {
      response.json(comicResponse.data);
    })
    .catch((err) => {
      response.json({
        msg: 'Somthing went horribly awry',
        error: err,
      });
    });
});

server.listen(port, () => {
  console.log(`Now listening on port: ${port}`);
});
