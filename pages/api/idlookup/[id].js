export default async function IdHandler(req, res) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAHwhPgEAAAAA1UgvX4LIPR7m2ornJszRmD4iJ3c%3DYzQIu3Henyxr7TcvlRfkKZ14ZzFOxd5LJ7C10nZfmFKdzBIBbg`,
      },
    };
    const response = await fetch(
      `https://api.twitter.com/2/users/${req.query.id}?user.fields=profile_image_url`,
      config
    );
    const data = await response.json();
    console.log(await data.data);
    res.status(200).send(data.data);
  } catch (err) {
    res.status(500).json(err);
  }
}
