const db = require('../db');
const jwt = require('jsonwebtoken');
const { response } = require('express');

const Updateitem = async (req, res) => {
  const token = req.cookies.jwt;
  const decode = jwt.decode(token);
  const regno = decode.regno;

  const { name, description, price, category, item_id } = req.body;

  try {
    const { filename, mimetype, size } = req.file;
    const filepath = req.file.path;

    const response = (await db.query('select * from items where owner_id = $1 and item_id = $2',[regno, item_id])).rows

    if(response.length == 0)
    {
      return res.json({error: "The item does not exist"});
    }

    await db.query(
      'update items set name = $1, description = $2, price = $3, category = $4, availability = $5, image = $6, owner_id = $7 where item_id = $8',
      [name, description, price, category, 'True', filename, regno, response[0].item_id]
    );

    res.json({ message: 'item has been posted.' });
  } catch (err) {
    console.log(err);
    res.json({ error: 'could not upload file' });
  }
};

module.exports = Updateitem;
