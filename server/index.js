const express = require('express');

const app = express();

const object =[{'name' :'hari'},{ 'name' :'krishna'},{'name' :'meti'},{ 'name' :'krishna'},{'name' :'meti'}];
const number =[1,2,3,4,5,6,7,8,9]

const cors = require('cors')

app.use(cors())

app.get('/person',(req, res) =>{
    res.send (object)
})
app.get('/num',(req, res) =>{
    res.send (number)
})



app.listen(5000, () =>console.log('app is running on 500'))