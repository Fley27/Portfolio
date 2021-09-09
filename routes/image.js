const express = require("express");
const router = express.Router();
var path = require("path");

router.post("/upload", (req, res) => {
    const filer = req.files.file;
    
    res.status(200).json({
        filename: filer.name,
        filepath: `https://libidoon.herokuapp.com/${rand}${filer.name}`,
        success: "File uplaoded successfully !",
        type: "image",
    });
});
module.exports = router;