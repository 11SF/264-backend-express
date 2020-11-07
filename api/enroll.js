let router = require('express').Router();
let enrollRule = require("../Model/EnrollRule");
let enrollForm = require("../Model/Form")

router.post("/api/enroll/setEnrollRule", async (req,res)=> {
        let enroll_rule = new enrollRule(req.body);
        // console.log(req.body);
        await enroll_rule.save();
        // console.log(enroll_rule);
        // res.json(enroll_rule);
        res.json({"msg":"Set enrollrule complete."})
});
router.put("/api/enroll/updateEnrollRule",async (req,res)=> {
    const payload = req.body;
    const update = await enrollRule
    .findByIdAndUpdate(
        "5fa591f3dec733eae55a14fd",
        { $set: payload }
    );
    res.json({"msg":"Update enrollrule complete."})
});
router.get("/api/enroll/getEnrollRule", async (req,res)=> {
    const data = await enrollRule.findById("5fa591f3dec733eae55a14fd");
    res.json(data)
});


router.post("/api/enroll/submitEnrollForm",async (req,res)=> {
    let form = new enrollForm(req.body);
    await form.save()
    res.json({"msg":"Submit enrollform complete."})
});
// router.get("/api/enroll/getEnrollForm", async (req,res)=> {
//         const result = await enrollForm.find({
//             "owner_info.student_id": req.body.student_id
//         })
//         res.json(result);
// });
// router.get("/api/enroll/getEnrollFormByStudent_id", async (req,res)=> {
//     const result = await enrollForm.find({
//         "owner_info.student_id": req.body.student_id
//     })
//         res.json(result);
// });
router.get("/api/enroll/getEnrollForm", async (req,res)=> {
    let queryParams = req.query;

    if(queryParams['select'] == 1) {            //student_id
        const result = await enrollForm.find({
            "owner_info.student_id": queryParams['student_id'],
        })  
        res.json(result);  
    } else if(queryParams['select'] == 2) {
        const result = await enrollForm.find({
            "owner_info.student_id": queryParams['student_id'],
            "form_status": queryParams['form_status']
        })   
        res.json(result);
    } else if(queryParams['select'] == 3) {
        const result = await enrollForm.find({
            "acception.advisor.name": queryParams['name'],
            "acception.advisor.accept": queryParams['accept']
        })   
        res.json(result);
    } else if(queryParams['select'] == 4) {
        const result = await enrollForm.find({
            "acception.staff.name": queryParams['name'],
            "acception.staff.accept": queryParams['accept']
        })   
        res.json(result);
    } else if(queryParams['select'] == 5) {
        const result = await enrollForm.find({
            "acception.teacher.name": queryParams['name'],
            "acception.teacher.accept": queryParams['accept']
        })   
        res.json(result);
    } else if(queryParams['select'] == 6) {
        const result = await enrollForm.find({
            "acception.doyen.name": queryParams['name'],
            "acception.doyen.accept": queryParams['accept']
        })   
        res.json(result);
    }  else if(queryParams['select'] == 7) {
        const result = await enrollForm.find({
            "form_status": queryParams['form_status']
        })   
        res.json(result);
    }  
});

module.exports = router;
