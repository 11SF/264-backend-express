let express = require('express')
let cors = require('cors')
let router = express.Router()
let bodyParser = require('body-parser')
let https = require('https')
const { Router } = require('express')
let app = express()
let db = require("./database")
let enrollRule = require('./Model/EnrollRule')

const HOST = '0.0.0.0'
const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
// app.use("/api", bodyParser.json(), router)
// app.use("/api",bodyParser.urlencoded({ extended : false}), router)

app.use(require("./api/user"))
app.use(require("./api/enroll"))
// router.route("/enroll/pushEnrollRule")
//     .post(async(req,res)=> {
//         let enroll_rule = new enrollRule(req.body.text);
//         await enroll_rule.save()
//     })

    app.listen(PORT, HOST, () => {
        console.log("Server is running on port :", PORT)
    })