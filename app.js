import express from "express"
import router from "./routes/user.route.js";
const app = express()
import bodyParser from "body-parser";

// app.use(express.json())
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.use("/api/users",router)

export {app};