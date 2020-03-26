const express = require('express')
const cors = require('cors')
const routes =  require('./routes')


const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
/* 
    Query Builder: KNEX
    
    
*/
app.listen(3333)