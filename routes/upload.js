
var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer({ dest: 'uploads/' }).single('fileUpload');


router.get('/upload', (req, res) => {
    res.send("thanks for using upload");
});

router.post('/upload', (req, res) => {
    upload(req, res, (err)=>{
        if(err) {
            res.status(500).json(err);
            return;
        }
        else if(req.file === undefined) {
            res.status(400).send('400 - Upload file is not received.');
            return;
        }
        res.json({size:req.file.size});
    });
});

module.exports = router;
