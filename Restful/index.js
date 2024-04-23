const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

//for all  requests it will respond
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"));


app.use(express.static(path.join(__dirname,"public")));

let posts = [


    {
        username: "apnacollage",
        content:"I love coding!"
    },
    {
        username: "shradhakhapra",
        content:"Hardwork is importrant"
    },
    {
        username: "rahulkumar",
        content:"i got selected for my 1st intership"
    },
];

app.get('/posts',(req,res)=>{
   
    res.render("index.ejs",{posts});

})

app.get('/posts/new',(req,res)=>{
res.render("new.ejs");
})

app.post('/posts',(req,res)=>{
    let{username,content} = req.body;
    posts.push({username,content});
    console.log(req.body);
    res.redirect("/posts")
})

app.listen(port,()=>{
    console.log(`listening at ${port}`);
});