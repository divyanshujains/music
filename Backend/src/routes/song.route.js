const { uploadSongcontroller , getAllSongs , getSongById , searchsong } = require("../controllers/song.contoller");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const cookie = require("cookie-parser");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.use(cookie());


router.use((req,res, next)=>{
    const token = req.cookies.token;
    console.log(token);
    
    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }
    try {
        const decoded = jwt.verify(token, process.env.jwtSecret);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: "Invalid token"});
    }
})

router.post("/upload",upload.single('audio'), uploadSongcontroller  )
router.get("/getallsongs", getAllSongs);

router.get("/search", searchsong);


router.get("/:id",getSongById );




module.exports =  router;