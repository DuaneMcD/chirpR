import puppeteer from 'puppeteer';

export default async function scrapeWiki(req, res) {
  let twitterHandles = [];
  const url =
    'https://en.wikipedia.org/wiki/List_of_most-followed_Twitter_accounts';
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto(url);

  for (let i = 2; i < 20; i++) {
    const [el] = await page.$x(
      `/html/body/div[3]/div[3]/div[5]/div[1]/table/tbody/tr[${i}]/td[2]/span/a`
    );
    const txt = await el.getProperty('text');
    const rawTxt = await txt.jsonValue();
    const noLeadingAt = await rawTxt.slice(1);
    twitterHandles.push(noLeadingAt);
  }
  browser.close();

  res.json(twitterHandles);

  return twitterHandles;
}
