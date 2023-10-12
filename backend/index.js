const express = require('express');
const app = express();
require('./connection/conn')
const auth = require('./Routes/Auth')
const list = require('./Routes/list')
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello World');
});



app.use('/api/v1', auth)
app.use('/api/v2',list)

app.listen(2000,()=>{
    console.log('Server is running on port 2000');
});