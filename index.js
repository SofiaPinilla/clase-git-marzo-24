const express = require("express")
const app = express()
const PORT = 8080

app.get("/",(req,res)=>{
    res.send("holi sofi")
})

app.listen(PORT,()=>console.log(`Servidor levantando en el puerto ${PORT}`))