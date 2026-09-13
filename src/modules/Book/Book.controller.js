import { Router } from "express";
import { AddUser, Aggregate1, Aggregate2, Aggregate3, Aggregate4, CreateIndex, DeleteAllBooksExcept, FindAllexecpt, FindGenre, FindInteger, Findlimit, GetAllbooksBtw, GetBook, InsertAuthor, InsertAuthors, UpdateBookYear } from "./Book.service.js";
import { successResponse } from "../../common/enum/utils/success.response.js";
const router = Router();

router.post("/", async(req,res)=>{
    const data = await AddUser(req.body)
    successResponse({res, data:data})
})
router.post("/index", async(req,res)=>{
    const data = await CreateIndex(req.body)
    successResponse({res, data:data})
})
router.post("/User", async(req,res)=>{
    const data = await InsertAuthor(req.body)
    successResponse({res, data:data})
})

router.post("/Users", async(req,res)=>{
    const data = await InsertAuthors(req.body)
    successResponse({res, data:data})
})

router.patch("/UpdateYear", async(req,res)=>{
    const data = await UpdateBookYear(req.body)
    successResponse({res, data:data})
})

router.get("/year" , async (req,res)=>{
    
    const data = await GetAllbooksBtw(req.query)
    successResponse({res, data:data})
})

router.get("/genres", async(req,res)=>{
    const data = await FindGenre(req.query)
    successResponse({res,data:data})
})


router.get("/skip-limit", async(req,res)=>{
    const data = await Findlimit()
    successResponse({res,data:data})
})
router.get("/year-integer", async(req,res)=>{
    const data = await FindInteger()
    successResponse({res,data:data})
})

router.get("/exclude-genres", async(req,res)=>{
    const data = await FindAllexecpt()
    successResponse({res,data:data})
})
router.delete("/before-year", async(req,res)=>{
    const data = await DeleteAllBooksExcept()
    successResponse({res,data:data})
})
router.get("/aggregate1", async(req,res)=>{
    const data = await Aggregate1()
    successResponse({res,data:data})
})
router.get("/aggregate2", async(req,res)=>{
    const data = await Aggregate2()
    successResponse({res,data:data})
})
router.get("/aggregate3", async(req,res)=>{
    const data = await Aggregate3()
    successResponse({res,data:data})
})

router.get("/aggregate4", async(req,res)=>{
    const data = await Aggregate4()
    successResponse({res,data:data})
})




router.get("/:title" , async (req,res)=>{

    const data = await GetBook(req.params)
    successResponse({res, data:data})
})



export default router