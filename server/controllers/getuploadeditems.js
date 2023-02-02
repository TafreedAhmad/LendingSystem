const db = require('../db')
const jwt = require('jsonwebtoken')

const getitems = async (req, res) => {


  const token = req.cookies.jwt;
  const decode = jwt.decode(token);
  const userid = decode.regno;

  try{
    
    const response = (await db.query("select * from items i join students s on i.owner_id = s.registration_number where owner_id = $1", [userid])).rows;
    res.json(response)
  } catch (err) {
    console.log(err);
    res.json({"error": "Could not get data"})
  }

  
}

module.exports = getitems;