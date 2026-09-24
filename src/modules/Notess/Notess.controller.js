import { Router } from "express";

import { successResponse } from "../../common/utils/success.response.js";
import { UserModel } from "../../DB/model/User.model.js";
import { createNote, DeleteAll, DeleteNote, GetNoteContent, GetNoteId, GetNotes, ReplaceNote, RetreiveAllNotes, RetreiveAllNotesAgrregate, UpdateAllNotes, UpdateNote } from "./Notess.service.js";
const router = Router()


router.post("/",async(req,res)=>{
const data = await createNote(req.query,req.body)  
successResponse({res,message:"Note created",data:data})
})

router.patch("/:notesId",async(req,res)=>{
    const data = await UpdateNote(req.params,req.query,req.body)
    successResponse({res,message:"Note Updated",data:data})
})

router.put("/replace/:notesId",async(req,res)=>{
    const data = await ReplaceNote(req.params,req.query,req.body)
    successResponse({res,message:"Note Updated",data:data})
})

router.patch("/all",async(req,res)=>{
    const data = await UpdateAllNotes(req.query,req.body)
    successResponse({res,message:"All Notes Updated",data:data})
})
router.delete("/delete",async (req,res)=>{
    const data = await DeleteAll(req.query)
    successResponse({res,message:"Done",data:data})
})


router.delete("/:notesId",async(req,res)=>{
    const data = await DeleteNote(req.params,req.query)
    successResponse({res,message:"Note deleted",data:data})
})


router.get("/paginate-sort",async(req,res)=>{
    const data = await GetNotes(req.query)
    successResponse({res,message:"Done",data:data})
})

router.get("/note-by-content",async(req,res)=>{
    const data = await GetNoteContent(req.query)
    successResponse({res,message:"Done",data:data})
})
router.get("/note-with-user",async(req,res)=>{
    const data = await RetreiveAllNotes(req.query)
    successResponse({res,message:"Done",data:data})
})

router.get("/aggregate",async(req,res)=>{
    const data = await RetreiveAllNotesAgrregate(req.query)
    successResponse({res,message:"Done",data:data})
})



router.get("/:notesId",async(req,res)=>{
    const data = await GetNoteId(req.params,req.query)
    successResponse({res,message:"Done",data:data})
})




export default router;