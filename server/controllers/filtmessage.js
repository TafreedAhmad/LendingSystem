const db = require('../db.js');
const jwt = require('jsonwebtoken');


const filtmessage = async (req, res) => {
  const token = req.cookies.jwt;
  const decode = jwt.decode(token);
  const regno = decode.regno;

  const {item_id, from_id} = req.body;
  try {
    response = await db.query("select * from messages where item_id = $1 and (receiver_id = $2 or sender_id = $3) order by date", [item_id, from_id, from_id]);
    res.json(response.rows);

  } catch (err) {
    res.json({"error": err.message});
  }
}

module.exports = filtmessage;