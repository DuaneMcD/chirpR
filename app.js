import request from 'request';
import express from 'express';
import cors from 'cors';
import path, { dirname } from 'path';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(cors());
const port = 3000;

const token =
  'AAAAAAAAAAAAAAAAAAAAAHwhPgEAAAAA1UgvX4LIPR7m2ornJszRmD4iJ3c%3DYzQIu3Henyxr7TcvlRfkKZ14ZzFOxd5LJ7C10nZfmFKdzBIBbg';
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

app.get('/test', (req, res) => {
  console.log('test complete!');
  res.json({ answer: 'Test Complete' });
});

app.use('/', express.static(path.join(__dirname, 'client/build')));
app.listen(port);
