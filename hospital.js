const express = require("express");
const app = express();

const users = [{
    name: "Abhinay",
    kidneys: [{
        healthy: false
    }]
}];
// filter in js
// query parameter
app.use(express.json());
app.get("/", function (req, res) {
    // Get Abhinay's kidneys
    const AbhinayKidneys = users[0].kidneys;
    const numberOfKidneys = AbhinayKidneys.length;
    let numberOfHealthyKidneys = 0;

    // Calculate the number of healthy kidneys
    for (let i = 0; i < AbhinayKidneys.length; i++) {
        if (AbhinayKidneys[i].healthy) {
            numberOfHealthyKidneys += 1;
        }
    }

    // Calculate the number of unhealthy kidneys
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    // Send response as JSON
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});
//middle ware
app.post("/",function(req,res)
{
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({

        healthy:isHealthy
    })
    res.json({
        msg:"Success Done!"
        
    })




})


// Listen on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
