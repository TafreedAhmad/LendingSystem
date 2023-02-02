const db = require('../db')
const jwt = require('jsonwebtoken')

const toggle = async (req, res) => {


  const token = req.cookies.jwt;
  const decode = jwt.decode(token);
  const userid = decode.regno;

  const {item_id} = req.body;

  try{
    let response = (await db.query("select * from items where item_id = $1", [item_id])).rows;
  

    let val = response[0].availability;
    if (val == 'false')
    {
      val = 'true';
    }
    else
    {
      val = 'false'
    }
    response = (await db.query("update items set availability = $1 where item_id = $2 and owner_id =$3", [val, item_id, userid])).rows;
    res.json({"message": "Item updated"});
  } catch (err) {
    console.log(err);
    res.json({"error": "Could not get data"})
  }

  
}

module.exports = toggle;