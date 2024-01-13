const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/hello', function (req, res) {
  const htmlFilePath = path.resolve(__dirname, '../dist/hello.html');
  const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
  res.send(htmlContent);
});

app.get('/image', function (req, res) {
  const htmlFilePath = path.resolve(__dirname, '../dist/image.html');
  const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
  res.send(htmlContent);
});

app.listen(9000, function () {
  console.log('Application is running on http://localhost:9000/');
});