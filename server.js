'use strict';

const EXPRESS = require('express');
const APP = EXPRESS();
const requestPROXY = require('express-request-proxy')
const PORT = process.env.PORT || 3000;

APP.use(EXPRESS.static('public'));

APP.get('/github/*', proxyGitHub);
function proxyGitHub(req, res) {
  console.log('Routing a GitHub AJAX request for ', req.params[0]);
  (requestPROXY({
    url: `https://api.github.com/${req.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(req, res);
}

APP.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));

APP.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`))
