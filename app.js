import request from 'request';
import express from 'express';
import cors from 'cors';
import path, { dirname } from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import axios from 'axios';

const testTweet = 'Imma make it Tweet! 🐔🦚';

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

// app.get('/tweet', async (req, res) => {
//   const response = await axios.get(
//     `https://api.twitter.com/2/tweets/1392679066528931847?expansions=attachments.media_keys,author_id`,
//     config
//   );
//   res.send(response.data);
// });

app.get('/users/:username', async (req, res) => {
  const response = await axios.get(
    `https://api.twitter.com/2/users/by/username/${req.params.username}`,
    config
  );
  res.json(response.data.data.id);
});

app.get('/timeline/:id', async (req, res) => {
  const response = await axios.get(
    // `https://api.twitter.com/2/users/${req.params.id}/tweets?expansions=attachments.media_keys,author_id&media.fields=preview_image_url,url,height&user.fields=profile_image_url`,
    `https://api.twitter.com/2/users/${req.params.id}/tweets?expansions=attachments.media_keys,author_id&media.fields=type,url,height&user.fields=profile_image_url`,
    config
  );
  res.json(response.data);
});

app.use('/', express.static(path.join(__dirname, 'client/build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);
