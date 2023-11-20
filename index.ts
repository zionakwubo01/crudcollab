
import express, { Application, Request, Response } from "express"
import cors from "cors"
import { dbconfig } from "./util/dbconfig"
const Port: number = 4567

const app: Application = express()
app.use(express.json())
app.use(cors())



app.listen(Port, () => {
    console.log("server is active")
    dbconfig()
})