const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },  
    content:{
        type:String,
        required:true
    },  
    category:{
        type:String,
        required:true
    },
    tags:{
        type:[String],
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    updatedAt:{
        type:Date,
        default: Date.now
    },
})

module.exports= mongoose.model("blog", blogSchema)