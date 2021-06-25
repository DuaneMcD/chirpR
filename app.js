import request from 'request';
import express from 'express';
import cors from 'cors';
import path, { dirname } from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import axios from 'axios';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
const token =
  'AAAAAAAAAAAAAAAAAAAAAHwhPgEAAAAA1UgvX4LIPR7m2ornJszRmD4iJ3c%3DYzQIu3Henyxr7TcvlRfkKZ14ZzFOxd5LJ7C10nZfmFKdzBIBbg';
const config = {
  headers: { Authorization: `Bearer ${token}` },
};
let twitterHandles = [];

const scrapeWiki = async url => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  for (let i = 2; i < 12; i++) {
    const [el] = await page.$x(
      `//*[@id="mw-content-text"]/div[1]/table/tbody/tr[${i}]/td[2]/a`
    );
    const txt = await el.getProperty('text');
    const rawTxt = await txt.jsonValue();
    const noLeadingAt = await rawTxt.slice(1);
    twitterHandles.push(noLeadingAt);
  }
  browser.close();
};

app.get('/puppet', async (req, res) => {
  const url =
    'https://en.wikipedia.org/wiki/List_of_most-followed_Twitter_accounts';
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  for (let i = 2; i < 12; i++) {
    const [el] = await page.$x(
      `//*[@id="mw-content-text"]/div[1]/table/tbody/tr[${i}]/td[2]/a`
    );
    const txt = await el.getProperty('text');
    const rawTxt = await txt.jsonValue();
    const noLeadingAt = await rawTxt.slice(1);
    twitterHandles.push(noLeadingAt);
  }
  browser.close();

  res.json(twitterHandles);
});

app.get('/idlookup/:id', async (req, res) => {
  const response = await axios.get(
    `https://api.twitter.com/2/users/${req.params.id}?user.fields=profile_image_url`,
    config
  );
  res.json(response.data);
});

app.get('/users/:username', async (req, res) => {
  const response = await axios.get(
    `https://api.twitter.com/2/users/by/username/${req.params.username}`,
    config
  );
  res.json(response.data.data.id);
});

app.get('/timeline/:id', async (req, res) => {
  const response = await axios.get(
    `https://api.twitter.com/2/users/${req.params.id}/tweets?expansions=attachments.poll_ids,attachments.media_keys,author_id,entities.mentions.username,geo.place_id,in_reply_to_user_id,referenced_tweets.id,referenced_tweets.id.author_id&tweet.fields=attachments,author_id,context_annotations,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,public_metrics,referenced_tweets,reply_settings,source,text,withheld&user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld&place.fields=contained_within,country,country_code,full_name,geo,id,name,place_type&poll.fields=duration_minutes,end_datetime,id,options,voting_status&media.fields=duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics,non_public_metrics,organic_metrics,promoted_metrics`,
    config
  );
  res.json(response.data);
});

app.use('/', express.static(path.join(__dirname, 'client/build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
app.listen(port);
