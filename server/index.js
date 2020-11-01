const express = require('express');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.get('/hello', (req, res)=>{
  res.send({message: 'hello'});  
});

app.listen(PORT || 5000, ()=> {
  console.log(`server running on port ${PORT}`)
});
