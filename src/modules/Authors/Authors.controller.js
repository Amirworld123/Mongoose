import { Router } from "express";
import { AddAuthor } from "./Authors.service.js";
import { successResponse } from "../../common/enum/utils/success.response.js";
const router = Router();


router.post("/" , async(req,res)=>{
    const data = await AddAuthor(req.body)
    successResponse({res, data:data})

})


export default router;