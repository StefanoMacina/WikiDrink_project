const express = require('express')
const app = express()
const PORT = 3000

const cors = require('cors');

app.use(cors());

app.use(express.json());

app.post('/find' , async(req, res) => {
    const data = await req.body
    console.log(data)
    res.status(200).json({message : 'data received' , data : data})
})

app.listen(PORT,() => {
    console.log(`server running at http://localhost:${PORT}`);
})