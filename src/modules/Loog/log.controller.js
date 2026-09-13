import { Router } from "express";
import { AddLog, InsertLog } from "./log.service.js";
import { successResponse } from "../../common/enum/utils/success.response.js";

const router = Router();

router.post("/", async(req,res)=>{
    const data = await AddLog(req.body)
    successResponse({res, data:data})
})
router.post("/Newlog", async(req,res)=>{
    const data = await InsertLog(req.body)
    successResponse({res, data:data})
})



export default router