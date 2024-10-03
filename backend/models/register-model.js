const {Schema,model} = require('mongoose')

const userSchema = new Schema({
username:{
    type:String,
    required:[true,"username is required"],
    unique:true,
    trim:true,
    minlength:[3,"username must be atleast 3 characters"],
    maxlength:[50,"username must be less than 50 characters"]
},
email:{
    type:String,
    required:[true,""],
    unique:true,
},
password:{
    type:String,
},
isAdmin:{
    type:Boolean,
    default:false
}

},{timestamps:true})


const User = new model("User",userSchema);
module.exports = User