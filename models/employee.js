const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {

        "name": { type: String, required: true },
        "designation": { type: String, required: true },
        "salary": { type: String, required: true },
        "email": { type: String, required: true },
    }
)
let employeemodel = mongoose.model("employee", schema);
module.exports = { employeemodel }