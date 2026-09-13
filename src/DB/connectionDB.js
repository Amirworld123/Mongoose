import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
import {MongoClient} from "mongodb";
import { DB_NAME, DB_URI } from "../config.js";

export const client = new MongoClient(DB_URI)

async function bootstrapDB(app, port = 3000) {
  try {
    await client.connect()
    console.log(`DB is connected`);

    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log({error});
    
    console.log(`DB is not connected`);
  }
}
const db = client.db(DB_NAME)
export { db, bootstrapDB };
