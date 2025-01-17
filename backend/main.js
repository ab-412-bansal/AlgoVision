import express from "express"
import contactRouter from "./routers/contact.js"
import connectToDb from "./db.js"
import userRouter from "./routers/user.js"
import cookieParser from "cookie-parser";
import quizRouter from "./routers/quiz.js"
import compileRouter from "./routers/compile.js"
import bodyParser from 'body-parser';

const app = express()
connectToDb()
app.use(cookieParser());
app.use(bodyParser());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,OPTIONS")
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization")
    res.header("Access-Control-Allow-Credentials", "true");
    if(req.method == "OPTIONS"){
        console.log("Preflight request caught")
        return res.sendStatus(201)
    }
    next()
})

app.use(express.json())
app.use("/contact", contactRouter)
app.use("/users",userRouter)
app.use("/quiz",quizRouter)
app.use("/api",compileRouter)


app.get("/", (req, res) => {
    res.send("GET Response")
})

app.listen(8000, () => console.log("server started at port 8000"))