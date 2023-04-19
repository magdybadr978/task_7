const router = require("express").Router();
const Post = require("../models/posts_model");


router.get("/",async(req,res) =>{
    try{
        const users = await Post.findAll();
        res.status(200).send(users);
    }catch(err){
        res.status(500).json({
            msg : "there is error in get request",
        });
    }
});

router.post("/" ,async(req,res) =>{
    try{
        const newUser = await Post.create({
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
        const updateUser = await Post.update({
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
        await Post.destroy({
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
