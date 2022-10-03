const express=require('express');
const registerdata=require("../models/register")
const multer=require('multer');
const path=require('path');
const mongoose=require('mongoose');

const routeruser=express.Router();


const storage=multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,'./images')
    },
    filename: function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname))
    }
    
})


const upload=new multer({
    storage:storage
})


routeruser.post('/api/evregister',upload.array("profile"),async(req,res)=>{
    

    try{
    
     const filename=req.files;
      const {name,gname,number,email,tnartist,TOP,FOICD,DOA}=req.body;

      console.log(filename[0].filename)
      console.log(filename[1].filename)
      console.log(name);

     const usernew=new registerdata({
        name:name,
        gname:gname,
        number:number,
        email:email,
        tnartist:tnartist,
        TOP:TOP,
        FOICD:FOICD,
        DOA:DOA,
        img:filename[0].filename,
        adhar:filename[1].filename,
        sign:filename[2].filename,
        PEON:0,
        officer:0,
        commisioner:0,
      })

      const data= await usernew.save();
      if(data){

        res.status(200).json({status:"ok",name:name})
      }

   
       
   }catch(err)
    {
        res.status(500).json({error:err.message});
    }

})

/*routeruser.post('/api/evregister',upload.array("profile"),async(req,res)=>{
    
const files=req.files;
console.log(files[0]);
if(!files)
{
   return res.json({status:"no files is found"});
}
else{
   return res.json({status:"ok",name:files});
}

})*/
routeruser.get("/api/getuser",async(req,res)=>{
    try{
        const getuser= await registerdata.find();

        res.status(200).json({status:"ok",getuser})
    }
    catch(error)
    {
        res.status(401).json({status:401,error})
    }
})

routeruser.get("/api/getuser/:id",async(req,res)=>{

    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({msg:"error id is not a valid"})   
    }
    
    try{

        const getdec= await registerdata.findById(id)
        res.status(200).json(getdec)

    }catch(error)
    {
             res.status(404).json({msg:"error in that"})
    }


})

routeruser.delete("/api/getuser/:id",async(req,res)=>{

    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({msg:"id is not valid"})
    }


try{

    const deletedoc=await registerdata.findByIdAndDelete({_id:id})
    res.status(200).json(deletedoc);

}catch(error)
{
   res.status(404).json({msg:"error "});
}
})

routeruser.patch("/api/getuser/PEON/:id",async(req,res)=>{

    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({msg:"id is not valid"})
    }

    try{

        const updateworkout= await registerdata.findByIdAndUpdate(id,{PEON:1})

        if(!updateworkout)
        {
            res.status(404).json({msg:"not updated"})
        }

        res.status(200).json(updateworkout)


    }catch(error)
    {
        res.status(404).json({msg:"error in documents"})

    }

})
routeruser.patch("/api/getuser/officer/:id",async(req,res)=>{

    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({msg:"id is not valid"})
    }

    try{

        const updateworkout= await registerdata.findByIdAndUpdate(id,{officer:1})

        if(!updateworkout)
        {
            res.status(404).json({msg:"not updated"})
        }

        res.status(200).json(updateworkout)


    }catch(error)
    {
        res.status(404).json({msg:"error in documents"})

    }

})
routeruser.patch("/api/getuser/commisioner/:id",async(req,res)=>{

    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        res.status(404).json({msg:"id is not valid"})
    }

    try{

        const updateworkout= await registerdata.findByIdAndUpdate(id,{commisioner:1})

        if(!updateworkout)
        {
            res.status(404).json({msg:"not updated"})
        }

        res.status(200).json(updateworkout)


    }catch(error)
    {
        res.status(404).json({msg:"error in documents"})

    }

})


module.exports=routeruser;