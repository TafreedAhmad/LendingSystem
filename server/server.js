const express = require('express')
const authrouter = require('./routes/Auth')
const messagerouter = require('./routes/Messages')
const uploadrouter = require('./routes/Items')
const cors = require('cors')
const cookieParser = require("cookie-parser");




const app = express()
const port = 4000

const options = {origin: true, credentials: true};
app.use(cors(options))
app.use(express.json())
app.use(cookieParser())
app.use('/images', express.static('images'))

app.get('/', (req, res) => {
  res.json({"message": "hello world"})
});

app.use('/api', authrouter);
app.use('/api', messagerouter);
app.use('/api', uploadrouter);
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});