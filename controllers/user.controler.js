import  User  from "../models/user.model.js";

const userRegister = async (req, res)=>{
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({message:"all fields are required"})
    }

    try{
    console.log("this is ",User)
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

export {userRegister};