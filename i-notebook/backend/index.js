const connectToMongo=require('./db')
connectToMongo();

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//routes
app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))
