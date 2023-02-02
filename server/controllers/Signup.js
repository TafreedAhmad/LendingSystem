const db = require('../db.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//const cookieParser = require('cookie-parser')

const maxAge = 3 * 24 * 60 * 60;
const createToken = async (regno) => {
  return await jwt.sign({ "regno": regno }, 'secret', {
    expiresIn: maxAge
  });
};

const Signup = async (req, res) => {

  try {
    let { regno, fname, lname, password, hostelno, phoneno, email} = req.body
    let response = await db.query("select * from students where registration_number = $1", [regno])
    
    if(response.rows.length === 0) {
      const salt = await bcrypt.genSalt();
      password = await bcrypt.hash(password, salt)

      await db.query("insert into students(registration_number, first_name, last_name, password, hostel_number, phone_number, email, isAdmin) values($1, $2, $3, $4, $5, $6, $7, $8)", [regno, fname, lname, password, hostelno, phoneno, email, false]);
      
      //generate jwt using id of the user
      token = await createToken(regno)
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.json({"message": "New user created"});
    }
    else {
      res.json({"error":"Regno already registerd!"});
    }


  } catch(err) {
    console.log(err)
    res.json({"error": err.message})
  }
}

module.exports = Signup;