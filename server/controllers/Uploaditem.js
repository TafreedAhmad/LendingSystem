const db = require('../db');
const jwt = require('jsonwebtoken');

const Uploaditem = async (req, res) => {
  const token = req.cookies.jwt;
  const decode = jwt.decode(token);
  const regno = decode.regno;

  const { name, description, price, category } = req.body;

  try {
    const { filename, mimetype, size } = req.file;
    const filepath = req.file.path;

    await db.query(
      'insert into items(name, description, price, category, availability, image, owner_id) values($1, $2, $3, $4, $5, $6, $7)',
      [name, description, price, category, 'True', filename, regno]
    );

    res.json({ message: 'item has been posted.' });
  } catch (err) {
    console.log(err);
    res.json({ error: 'could not upload file' });
  }
};

module.exports = Uploaditem;
