export default function handler(req, res) {
  const { uid } = req.query;
  const cookies = req.cookies;
  // res.status(200).json({ name: `john - ${uid} ${JSON.stringify(cookies)}` });
  // res.status(500).send({ message: 'Internal Server Error!' });
  res.redirect('/api/user', 307);
}
