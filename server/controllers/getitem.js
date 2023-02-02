const db = require('../db')
const jwt = require('jsonwebtoken')

const getitem = async (req, res) => {

  const token = req.cookies.jwt;
  const decode = jwt.decode(token);
  const userid = decode.regno;

  console.log('id', req.body)
  const {item_id} = req.body;

  try{
    
    const response = (await db.query("select * from available_items where item_id = $1", [item_id])).rows; 
    res.json(response[0])
   
  } catch (err) {
    console.log(err);
    res.json({"error": "Could not get data"})
  }

  
}

module.exports = getitem;