export default async function Username(req, res) {
  const config = {
    headers: {
      Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAHwhPgEAAAAA1UgvX4LIPR7m2ornJszRmD4iJ3c%3DYzQIu3Henyxr7TcvlRfkKZ14ZzFOxd5LJ7C10nZfmFKdzBIBbg`,
    },
  };

  const response = await fetch(
    `https://api.twitter.com/2/users/by/username/${req.query.username}`,
    config
  );
  const data = await response.json();
  res.status(200).send(data);
}
