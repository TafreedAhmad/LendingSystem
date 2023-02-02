const db = require('../db.js');
const jwt = require('jsonwebtoken');


const Postmessage = async (req, res) => {
  const token = req.cookies.jwt;
  const decode = jwt.decode(token);
  const regno = decode.regno;

  const {to, item_id, message} = req.body;
  try {
    await db.query("insert into messages(sender_id, receiver_id, item_id, message, date) values($1, $2, $3, $4, current_date)", [regno, to, item_id, message]);
    res.json({'message': 'message has been added'});

  } catch (err) {
    res.json({"error": err.message});
  }
}

module.exports = Postmessage;