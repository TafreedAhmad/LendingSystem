const db = require('../db.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//const cookieParser = require('cookie-parser')

const maxAge = 3 * 24 * 60 * 60;
const createToken = async (regno) => {
  console.log('regno', regno)
  return await jwt.sign({ "regno":regno }, 'secret', {
    expiresIn: maxAge
  });
};

const Signin = async (req, res) => {

  try {
    let { regno, password } = req.body
    let response = (await db.query("select * from students where registration_number = $1", [regno])).rows
    if(response.length === 0)
    {
      res.json({"error": "Registration number not found."})
    }
    else
    {
      
      const user = response[0];
      let hashedPassword = user.password;
      let checkPassword = await bcrypt.compare(password, hashedPassword);
      if(checkPassword === true)
      {
        token = await createToken(user.registration_number)
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        if(response[0].isadmin == true)
        {
          res.json({"message": "admin"})
        }
        else {
          res.json({"message": "You are logged in!"})
        }
        
      }
      else{
        res.json({"error": "Incorrect Password!"})
      }
    }
    
  } catch(err) {
    console.log(err)
    res.json({"error": err.message})
  }
}

module.exports = Signin;