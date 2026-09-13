import { AuthorModel } from "../../DB/model/Authors.model.js"

export const AddAuthor = async (inputs)=>{
    const data = await AuthorModel.insertOne(inputs)
    return data;

}