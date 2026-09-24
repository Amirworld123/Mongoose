import { Router } from "express";
import { DeleteUser, GetUser, Login, SignUp, UpdateUser } from "./User.service.js";
import { successResponse } from "../../common/utils/success.response.js";
import { UserModel } from "../../DB/model/User.model.js";
const router = Router();


router.post("/SignUp" , async(req,res)=>{
    const data = await SignUp(req.body)
    successResponse({res, message:"User added successfuly" ,data:data})
  
})

router.post("/Login",async(req,res)=>{
     const data = await Login(req.body)
    successResponse({res, message:"login successfully" ,data:data})
})

router.patch("/:userId",async(req,res)=>{``
     const data = await UpdateUser(req.params , req.body)
    successResponse({res, message:"User Updated" ,data:data})
})

router.delete("/:userId",async(req,res)=>{
    
     const data = await DeleteUser(req.params)
    successResponse({res, message:"user deleted" ,data:data})
})

router.get("/:userId",async(req,res)=>{
    const data = await GetUser(req.params)
       successResponse({res, message:"Done" ,data:data})
})



export default router;