import express  from "express";

 const router = express.Router() ;

 router.get("/" , (_req,res) => {
    res.send("Fetching de entradas")
 })

 router.post("/" , (_req,res)=>{
    res.send("saving de entradas")
 })

 export default router ;