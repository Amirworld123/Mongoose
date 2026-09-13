import { LogModel } from "../../DB/model/Logs.model.js"

export const AddLog = async (inputs)=>{
const data = await LogModel.insertOne(inputs)
return data ;
} 
export const InsertLog = async (inputs)=>{
    const data = await LogModel.insertOne(inputs)
    return data 
}
