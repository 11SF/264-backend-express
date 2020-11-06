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
router.get("/api/enroll/getEnrollForm", async (req,res)=> {
        const result = await enrollForm.find({
            "owner_info.student_id": req.body.student_id,
            "acception.teacher.name": req.body.staff_name
        })
        res.json(result);
});

module.exports = router;
