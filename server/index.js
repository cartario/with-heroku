const express = require('express');
const dotenv = require('dotenv').config();
var cors = require('cors')

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{  
  res.status(200);
});

app.get('/hello', (req, res)=>{  
  res.send({message: 'hello'});  
});

app.post('/hello', (req, res)=>{  
  const message = req.body.message;
  res.send({message});
})

app.listen(PORT || 5000, ()=> {
  console.log(`server running on port ${PORT}`)
});
