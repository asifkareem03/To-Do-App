//import mongoose
const mongoose=require('mongoose')

const { Schema } = mongoose;

//connect db with server
mongoose.connect('mongodb://localhost:27017/todoApp',{useNewUrlParser:true})

//Scema Creation
// const schema = new Schema({ 
//     name:String,
//     uname:String,
//     password:String, 
//     lists:{
//         type: mongoose.SchemaTypes.Mixed,
//         default:{}
//     }},
//     { minimize: false });
// const User = mongoose.model('User', schema);

// Model Creation
const User=mongoose.model('User',{
    name:String,
    uname:String,
    password:String,
    lists:[]
})

module.exports={
    User
}