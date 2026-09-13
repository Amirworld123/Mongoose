import { db } from "../connectionDB.js";

export const LogModel = db.collection("logs",{
    capped:true, size:1048576
    

})