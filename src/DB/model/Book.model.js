import { db } from "../connectionDB.js";

export const BookModel = db.collection("books",{
    validate:{
         title: { $type: "string", $ne: "" }
  
    }

    
})





