import { config } from 'dotenv';
import express from 'express';

config();
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ name: "apprunner-demo", env: process.env.APP_ENV });
});

app.get('/healthz', (req, res) => {
  res.send('ok');
});

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.get('/hello/:name', (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});