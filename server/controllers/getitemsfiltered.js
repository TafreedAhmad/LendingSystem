const db = require('../db')
const jwt = require('jsonwebtoken')

const getitems = async (req, res) => {


  const token = req.cookies.jwt;
  const decode = jwt.decode(token);
  const userid = decode.regno;

  let {name} = req.body;
  name = name.toUpperCase();

  try{
    
    const response = (await db.query("select * from available_items where (owner_id <> $1) and (upper(item_name) like $2 or upper(item_name) like $3 or upper(item_name) like $4 or upper(item_name) like  $5) ", [userid, '%' + name +'%',  name +'%',  '%' + name,name])).rows;
    res.json(response)
  } catch (err) {
    console.log(err);
    res.json({"error": "Could not get data"})
  }

  
}

module.exports = getitems;