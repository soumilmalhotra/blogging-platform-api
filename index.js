const express = require("express");
const app = express();
const connectDb = require("./config/dbConnection")
require('dotenv').config();
const blog = require("./models/blogs") 



connectDb()

app.use(express.json());

app
.get('/api/blogs', (req, res) => {
    blog.find()
    .then(blogs => {
      res.status(200).json(blogs);
    })
    .catch(e => {
      res.status(500).json({ error: "Something went wrong" });
    });
  })

  //get a specific blog

.get('/api/blogs/:id', (req,res) =>{
   blog.findById(req.params.id)
  .then(blog=>{
    if(!blog){
      return res.status(404).json("No such blog found")
    }
    return res.status(200).json(blog)
  })
  .catch(e=>{
    res.status(500).json("server error")
  })
})

//post a blog

.post('/api/blogs',  (req, res) => {
    //save new blog content in a const as an object
    const {title,content,category,tags} = req.body
    
    //useage of data base 
     blog.create({
      title,
      content,
      category,
      tags
    })
    .then(blog=>{ 
      res.status(201).json(blog)
      })
    .catch(e=>{
      res.status(500)
      throw new Error("blog creation error");
    })
  })

.delete("/api/blogs/:id", async (req,res) =>{
  try{
    const blogToBeDeleted = await blog.findById(req.params.id);
    if(!blogToBeDeleted) {
      return res.status(404).json("no such blog found")
    }
    await blog.deleteOne({_id:req.params.id})
    res.status(200).json("deleted")
  }catch(e){
     res.status(500).json("Error");
  }
})

.put("/api/blogs/:id", async(req,res) => {
  
})



app.listen(8000, () => {
  console.log(`🚀 Server is running on port 8000`);
});