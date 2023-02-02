const { json } = require('express');
const jwt = require('jsonwebtoken');
const db = require('../db.js')


// check current user
const checkUser = async(req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'secret', async (err, decodedToken) => {
      if (err) {
        res.json({"error": "Not a valid json token"});
      } else {
        const decode = jwt.decode(token);
        const regno = decode.regno;
        let response = (await db.query("select * from students where registration_number = $1", [regno])).rows
        if(response[0].isadmin == false)
        {
          return res.json({"error": "Not Admin"})
        }
        else{
          next();
        }
      }
    });
  } else {
    res.json({"error": "You are not Logged In!"});
  }
};


module.exports = checkUser