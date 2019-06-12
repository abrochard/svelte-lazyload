const express = require('express');
const path = require('path');

const app = express();

// STATIC
const assets = [
  'bundle.js',
  'main.css',
  'main.css.map',
  'favicon.ico',
  'manifest.json'
];
assets.forEach(asset => {
  app.get('/' + asset, (req, res) => {
    res.sendFile(path.join(__dirname, 'public/', asset));
  });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/', 'index.html'));
});

app.listen(3000, () => console.log('Listening on port 3000'));
