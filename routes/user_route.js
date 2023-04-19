//const db = require("../config/db");
const router = require("express").Router();
const User = require("../models/users_model");

router.get("/",async(req,res) =>{
    try{
        const users = await User.findAll();
        res.status(200).send(users);
    }catch(err){
        res.status(500).json({
            msg : "there is error in get request",
        });
    }
});

router.post("/" ,async(req,res) =>{
    try{
        const newUser = await User.create({
            Username : req.body.Username,
            Password : req.body.password,
            Email : req.body.email,
            Role : req.body.Role
        });
        res.status(200).send(newUser);
    }catch(err){
        res.status(500).json({
            msg : "there is error in post request",
        });
    }

    
});


router.patch("/:id" ,async(req,res) =>{
    try{
        const updateUser = await User.update({
            Username : req.body.Username,
            Password : req.body.password,
            Email : req.body.email,
            Role : req.body.Role
        });
        res.send(updateUser);
    }catch(err){
        res.status(500).json({
            msg : "there is error in patch request",
        });
    }
    
});

router.delete("/:id",async(req,res) =>{
    try{
        await User.destroy({
            where :{
                id : req.params.id
            }
        });
        res.send("deleted");
    }catch(err){
        res.status(500).json({
            msg : "there is error in delete request",
        });
    }
    
});


module.exports = router;


