let router = require('express').Router()
let https = require('https')

const token = "";
router.post("/api/user/identify",(req, res) => {
    let user_information = []
        let username = req.body.username
        let password = req.body.password

        let options = {
            'method': 'POST',
            'hostname': 'restapi.tu.ac.th',
            'path': '/api/v1/auth/Ad/verify',
            'headers': {
              'Content-Type': 'application/json',
              'Application-Key': token
            }    
        }

        let req_api =  https.request(options,(res_api)=>{
            let chunks = [];
            res_api.on("data", (chunk)=>{
                chunks.push(chunk)
            })
            res_api.on("end",async (chunk)=>{
                var body =  Buffer.concat(chunks)
                console.log(body.toString())
                user_information = await JSON.parse(body.toString())
                res.json(user_information)
            })
            res_api.on("error",(error)=>{
                console.log(error)
            })
        })
        
        var postData = `{\n\t\"UserName\":\"${username}\",\n\t\"PassWord\":\"${password}\"\n}`
        
        req_api.write(postData)
        
        req_api.end();
})

module.exports = router