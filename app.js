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
    // `https://api.twitter.com/2/users/${req.params.id}/tweets?expansions=attachments.media_keys,author_id&media.fields=type,url,height&user.fields=profile_image_url`,
    `https://api.twitter.com/2/users/${req.params.id}/tweets?expansions=attachments.poll_ids,attachments.media_keys,author_id,entities.mentions.username,geo.place_id,in_reply_to_user_id,referenced_tweets.id,referenced_tweets.id.author_id&tweet.fields=attachments,author_id,context_annotations,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,public_metrics,referenced_tweets,reply_settings,source,text,withheld&user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld&place.fields=contained_within,country,country_code,full_name,geo,id,name,place_type&poll.fields=duration_minutes,end_datetime,id,options,voting_status&media.fields=duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics,non_public_metrics,organic_metrics,promoted_metrics&max_results=5`,
    config
  );
  res.json(response.data);
});

app.use('/', express.static(path.join(__dirname, 'client/build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
app.listen(port);
