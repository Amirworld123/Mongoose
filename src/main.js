import express from "express"
import { globalErrorHandling } from './middleware/index.js';
import { bootstrapDB } from './DB/connectionDB.js';
import { PORT } from "./config.js";
import cors from "cors"
import { BookController } from "./modules/Book/index.js";
import { AuthorController } from "./modules/Authors/index.js";
import { LogControlller } from "./modules/Loog/index.js";

const app = express();

await bootstrapDB(app,PORT);
app.use(cors(),express.json());
app.use("/Books",BookController)
app.use("/Authors",AuthorController)
app.use("/Logs",LogControlller)
app.all("/", (req,res)=> res.status(200).json({message:"welcome byko fy dayrtna"}))



app.get('/', (req,res,next) => res.json("Hello World"))

app.use(globalErrorHandling)