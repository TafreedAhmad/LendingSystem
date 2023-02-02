const db = require('../db.js');
const jwt = require('jsonwebtoken');


const Getsenders = async (req, res) => {
  const token = req.cookies.jwt;
  const decode = jwt.decode(token);
  const regno = decode.regno;

  const {item_id} = req.body;
  try {
    response = await db.query("select distinct m.sender_id, concat(s.first_name, ' ' , s.last_name) as name from messages m join students s on m.sender_id = s.registration_number where item_id = $1 and receiver_id = $2", [item_id, regno]);
    res.json(response.rows);

  } catch (err) {
    res.json({"error": err.message});
  }
}

module.exports = Getsenders;