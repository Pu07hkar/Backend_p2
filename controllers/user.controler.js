import  User  from "../models/user.model.js";

const userRegister = async (req, res)=>{
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({message:"all fields are required"})
    }

    try{
    
    const userexists = await User.findOne({email});

    if(userexists){
        return res.status(400).json({message:"user already exist of this email id"})
    }
    const newuser = await User.create({
        name,
        email,
        password
    });
    await newuser.save();
    return res.status(200).json({message:"new user created successfully"});
    }catch(err){
        console.log(err)
    }
}

const getAllUsers = async (req,res)=>{

    try{
        const users = await User.find();
        if(!users || users.length==0){
            return res.status(400).json({message:"no user found"});
        }

        res.status(200).json({users})

    }catch(err){
        console.log("error in fetching user")
        return res.status(400).json({message:"internal err"})
    }
}

const getUserById = async (req,res)=>{
    try{
        const id = req.params.id;
        const user = await User.findById(id);
        if(!user){
            return res.status(400).json({message:"user not found"})
        }
        res.status(200).json({user})
    }catch(err){
        console.log("error in fetching user by id")
        return res.status(400).json({message:"internal err"})
    }
}

export {userRegister, getAllUsers,getUserById};