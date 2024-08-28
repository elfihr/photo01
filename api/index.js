import express from 'express'
import mysql from "mysql2"
import cors from "cors"



const db  = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"admin",
    database:"photo"

})

const app = express()

app.use(express.json())
app.use(cors())
//GET
app.get("/gallery",(req,res) => {
    const q = "SELECT * FROM gallery"

    db.query(q,(err,data) => {
        if(err) res.json(err)
        return res.json(data)
    })
})

//Post
app.post("/gallery", (req,res) => {
    const q = "INSERT INTO gallery (`title`,`desc`,`img`) VALUES (?)"

    const values = [
        req.body.title,
        req.body.desc,
        req.body.img
    ]

    db.query(q,[values],(err,data) => {
        if(err) res.json(err)
        return res.json(data)
    })
})

//Delete
app.delete("/gallery/:id",(req,res) => {
   const photoId = req.params.id
   const q = "DELETE FROM gallery WHERE id = ?"

   db.query(q,[photoId],(err,data) => {
    if(err) return res.json(err)
    return res.json(data)
   })
})

//Put
app.put("/gallery/:id",(req,res) => {
    const photoID = req.params.id
    const q = "UPDATE gallery SET `title`=?,`desc`=?,`img`=? WHERE id =?"

    const values = [
        req.body.title,
        req.body.desc,
        req.body.img
    ]

    db.query(q,[...values,photoID],(err,data) => {
        if(err) return res.json(err)
        return res.json("update com sucesso")
    })
})


app.get("/",(req,res) =>{
    res.send("Server On")
})

app.listen(4300,()=>{
    console.log("Server Online")
    console.log("http://localhost:4300")
})


