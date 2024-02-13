const express = require('express')
const app = express()

app.get((req, res) => {

         
    res.json({message: "connectado com sucesso"})
})



app.listen(2000, () => console.log("connected"))


