const db = require('../db')
const jwt = require('jsonwebtoken')

const deleteuser = async (req, res) => {


  const token = req.cookies.jwt;
  const decode = jwt.decode(token);
  const userid = decode.regno;

  const {regno} = req.body;

  try{
    
    const response = (await db.query("delete from students where registration_number = $1", [regno])).rows;
    res.json({"message": "The user has been deleted"})
  } catch (err) {
    console.log(err);
    res.json({"error": "Could not get data"})
  }

  
}

module.exports = deleteuser;