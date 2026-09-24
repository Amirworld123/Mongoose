import { toObjectId } from "../../common/utils/objectID.js"
import { NotesModel, UserModel } from "../../DB/model/index.js"

export const createNote= async({userId},inputs)=>{
    const exist = await UserModel.findById(userId)
    if(!exist)
        throw new Error(" User not found")
const notes = new NotesModel({...inputs,userId})

await notes.save()
return notes


}


export const ReplaceNote =async ({ notesId },{userId},{ title,content })=>{

   const exist = await UserModel.findById(userId)
   if(!exist)
      throw new Error("You are not the owner")
      
   const note = await NotesModel.findById(notesId)
   if (!note){
      throw new Error ("Note not found")
   }
 

    const Note = await NotesModel.findOneAndReplace(
      {
         _id:notesId
      },
        { title,content ,userId}
      
      
   

)
 return Note
}


export const UpdateNote =async ({ notesId },{userId},{ title,content })=>{

   const exist = await UserModel.findById(userId)
   if(!exist)
      throw new Error("You are not the owner")
      
   const note = await NotesModel.findById(notesId)
   if (!note){
      throw new Error ("Note not found")
   }
 

    const Note = await NotesModel.updateOne(
      {
         _id:notesId
      },{
         $set:{
            title,content
         },
     
      $inc:{
         __v:1
      }
      
   }

)
 return Note
}

export const UpdateAllNotes = async ({userId},inputs)=>{
   
  const exist = await UserModel.findById(userId);
  if (!exist)
    throw new Error("You are not the owner");


 const Note = await NotesModel.updateMany(
      {
         userId
      },{
         $set:{
            title:inputs.title
         },
     
      $inc:{
         __v:1
      }
      
   }

)

 return Note
}

export const DeleteNote =async ({ notesId },{userId})=>{

   const exist = await UserModel.findById(userId)
   if(!exist)
      throw new Error("You are not the owner")
      
   const note = await NotesModel.findById(notesId)
   if (!note){
      throw new Error ("Note not found")
   }
 

    const Note = await NotesModel.deleteOne(
      {
         _id:notesId
      }

)
 return Note
}
   

export const GetNotes = async({userId,page,limit})=>{
    const exist = await UserModel.findById(userId)
   if(!exist)
      throw new Error("You are not the owner")
      
   
  const skip = (page-1)*limit
   const Note = await NotesModel.find(
    {
        userId
    }
        
    ).skip(skip).limit(limit)
    return Note
}

export const GetNoteId = async({notesId},{userId})=>{
 const exist = await UserModel.findById(userId)
   if(!exist)
      throw new Error("You are not the owner")

    const note = await NotesModel.findById(notesId)
   if (!note){
      throw new Error ("Note not found")
   }
   return note

}

export const GetNoteContent = async({userId,content})=>{
 const exist = await UserModel.findById(userId)
   if(!exist)
      throw new Error("You are not the owner")

    const note = await NotesModel.findOne({
        content
    })
   if (!note){
      throw new Error ("Note not found")
   }
   return note

}


export const RetreiveAllNotes = async({userId})=>{
 const exist = await UserModel.findById(userId)
   if(!exist)
      throw new Error("You are not the owner")

    const note = await NotesModel.find({
        userId
    }
    ).select("title userId createdAt").populate({path:"userId",select:"email -_id"})
   if (!note){
      throw new Error ("Note not found")
   }
   return note

}


export const RetreiveAllNotesAgrregate = async({userId,title})=>{
 
    const exist = await UserModel.findById(userId)
   if(!exist)
      throw new Error("You are not the owner")

    const note = await NotesModel.aggregate([
   {
    $match:{title,userId:toObjectId(userId)}
    

   },
   {
    $lookup:{
      from: "users",           
      localField: "userId",    
      foreignField: "_id",         
      as: "user"        
    }
   },{
 $unwind:"$user"
   },
   {
    $project:{title:1,userId:1,createdAt:1,user:{firstname:1,lastname:1,email:1}}
   }
   

    ]
     
    
    )
   if (note.length==0){
      throw new Error ("Note not found")
   }
   return note

}


export const DeleteAll = async({userId})=>{
     const exist = await UserModel.findById(userId)
   if(!exist)
      throw new Error("You are not the owner")

   const note = await NotesModel.deleteMany({
    userId
   })
   return note
}