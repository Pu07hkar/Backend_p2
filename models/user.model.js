import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt"
const userSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase : true,
    },
    password:{
        type: String,
        required: true,
    },
});

userSchema.pre("save", async function (next) {
    if(this.isModified("password")){
        this.password = await bcrypt.hash("password", 10);
    next()
    } 
})

userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare("password", this.password);
}

const User = mongoose.model("User", userSchema);
export default User;