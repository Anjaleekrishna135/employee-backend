const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { employeemodel } = require("./models/employee")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://anjaleekrishnaps2001:anjalee2001@cluster0.cnbaf.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add", (req, res) => {
    let input = req.body
    let employee = new employeemodel(input)
    employee.save()
    console.log(employee)
    res.json({ "status": "success" })
})

app.get("/view", (req, res) => {

    employeemodel.find().then(
        (data) => {
            res.json(data)
        }

    ).catch(
        (error) => {
            res.json(error)
        }
    )
})

app.listen(8054, () => {
    console.log("server started")

})
app.get("/", (req, res) => {
    res.send("hello")
})

app.get("/contact", (req, res) => {
    res.send("welcome to my contact page")
})




