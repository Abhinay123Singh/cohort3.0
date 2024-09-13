// creating a http server 
// express use
// node default library =<no 
const express=require("express");
// create a hospital app
const app =express();
// listen a specific port
function sum(n)
{
    let ans=0;
    for(let i=1;i<=n;i++)
    {
        ans=ans+i;
    }
    return ans;
}
app.get("/",function(req,res)
{
const n=req.query.n;
const ans=sum(n);
res.send("hii your ans is"+ ans);
})

