import express from "express"
import dotenv from "dotenv"

dotenv.config({
    path: './.env'
})
const app = express()

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    return res.status(200).json({message:"all is good"})
})
app.get("/test", (req, res) => {
    return res.status(200).json({message:"this is a test route"})
})

app.listen(port, () => {
    console.log(`server started ${port}`)
})