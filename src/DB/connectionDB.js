
import mongoose from "mongoose";
import { DB_URI } from "../config.js";
import { UserModel } from "./model/User.model.js";



async function bootstrapDB(app, port = 3000) {
  try {
    await mongoose.connect(DB_URI,{serverSelectionTimeoutMS:30000})
    console.log(`DB is connected`);
    await UserModel.syncIndexes()
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log({error});
    
    console.log(`DB is not connected`);
  }
}

export { bootstrapDB };
