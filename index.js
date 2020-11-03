let express = require('express')
let cors = require('cors')
let router = express.Router()
let bodyParser = require('body-parser')
let https = require('https')
let app = express()

const PORT = 5000
app.use(cors())

app.use("/api", bodyParser.json(), router)
app.use("/api",bodyParser.urlencoded({ extended : false}), router)

let user_information = []

router.route("/getUser")
    .get((req,res)=>{
        res.json(user_information)
})
router.route("/getUser")
    .post( (req,res)=>{
        let username = req.body.username
        let password = req.body.password

        let options = {
            'method': 'POST',
            'hostname': 'restapi.tu.ac.th',
            'path': '/api/v1/auth/Ad/verify',
            'headers': {
              'Content-Type': 'application/json',
              'Application-Key': 'TUb137bfafbaf4a6f5971dcbd060cffee36222351a62a97089c1932e41279778b9f4219202d623edad7df0e3156ff22726'
            }    
        }

        let req_api = https.request(options,(res_api)=>{
            let chunks = [];
            res_api.on("data", (chunk)=>{
                chunks.push(chunk)
            })
            res_api.on("end", (chunk)=>{
                var body = Buffer.concat(chunks)
                console.log(body.toString())
                user_information = JSON.parse(body.toString())
            })
            res_api.on("error",(error)=>{
                console.log(error)
            })
        })
        
        var postData = `{\n\t\"UserName\":\"${username}\",\n\t\"PassWord\":\"${password}\"\n}`
        
        req_api.write(postData)
        
        req_api.end();
        res.json(user_information)
    })

app.listen(PORT, ()=> console.log('Server is running on :',PORT))