import { UserModel } from "../../DB/model/User.model.js";

export const SignUp = async (inputs)=>{
const exist = await UserModel.findOne({email:inputs.email})
if (exist)
    throw new Error("email already exist")
    const user = new UserModel(inputs)
 await user.save()
    return user

}

export const Login = async (inputs)=>{
   
   const user = await UserModel.findOne({email:inputs.email,password:inputs.password})
   if (!user)
    throw new Error("Invalid email or password")
  
   await user.save()
   return user
}

export const UpdateUser =async ({ userId },{ firstname , lastname , email })=>{

  
   const User = await UserModel.findById(userId)
   if (!User){
      throw new Error ("User not found")
   }
 
    const exist = await UserModel.findOne({email})
   if(exist)
      throw new Error("Email is exist")
      
    const user = await UserModel.updateMany(
      {
         _id:userId
      },{
         $set:{
            firstname,lastname,email
         },
      $unset:{
         password:1
      },
      $inc:{
         __v:1
      }
      
   }

)

}

export const DeleteUser = async({userId})=>{
   const User = await UserModel.findById( userId )
   if(!User)
      throw new Error("User not found")

    const user = await UserModel.deleteOne({_id:userId})

   return user
}

export const GetUser = async ({userId})=>{
    const User = await UserModel.findById( userId )
   if(!User)
      throw new Error("User not found")
   return User


}