const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')

router.use(express.json());

router.post('/', auth ,(req,res)=>{
    const vitals = {
        a: parseInt(req.body.a),
        b: parseInt(req.body.b)
    }
    let score = vitals.a + vitals.b;
    res.send(`Cscore:${score}`);
    console.log("score retrieved")
})

module.exports = router;