import express from "express"
import { globalErrorHandling } from './middleware/index.js';
import { bootstrapDB } from './DB/connectionDB.js';
import { PORT } from "./config.js";
import cors from "cors"
import { UserController } from "./modules/Users/index.js";
import { NotessController } from "./modules/Notess/index.js";


const app = express();

await bootstrapDB(app,PORT);
app.use(cors(),express.json());

app.use("/users" , UserController)
app.use("/notes" ,NotessController )
app.all("/", (req,res)=> res.status(200).json({message:"welcome byko fy dayrtna"}))



app.get('/', (req,res,next) => res.json("Hello World"))

app.use(globalErrorHandling)