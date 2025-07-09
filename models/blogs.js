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
    }
}, { timestamps: true })

module.exports= mongoose.model("blog", blogSchema)