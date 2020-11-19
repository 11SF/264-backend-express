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
// router.get('/', function(req, res) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true); 
// });

app.use(require("./api/user"))
app.use(require("./api/enroll"))


    app.listen(PORT, HOST, () => {
        console.log("Server is running on port :", PORT)
    })