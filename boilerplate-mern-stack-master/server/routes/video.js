const express = require('express');
const router = express.Router();
// const { Video } = require("../models/Video");

const { auth } = require("../middleware/auth");
const multer =require("multer");
const ffmpeg = require("fluent-ffmpeg");

// STORAGE MULTER CONFIG
let storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        console.log('ext=',ext);
        if(ext !== '.mp4' || ext !== '.MP4'){
            return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
        }
        cb(null, true)
    }
});

const upload = multer({ storage: storage }).single("file");

//=================================
//             Video
//=================================

router.post('/uploadfiles', (req, res) => {
    // 비디오를 서버에 저장한다.
    upload(req, res, err =>{
        if(err) {
            return res.json({success: false, err})
        }
        return res.json({ success: true, url: res.req.file.path, fileName: res.req.file.filename })
    })
})

router.post('/thumbnail', (req, res) => {
    // 썸네일 생성하고 비디오 러닝타임도 가져오기 
    let filePath = "";
    let fileDuration = "";

    //비디오 정보 가져오기
    ffmpeg.ffprobe(req.body.url, function (err, metadata){
        console.log(metadata);
        console.log(metadata.format.duration);
        fileDuration = metadata.format.duration;
    });

    // 썸네일 생성
    ffmpeg(req.body.url)
    .on('filenames', function(filenames){ // 썸네일 파일 네임 생성
        console.log('Will generate '+filenames.join(', '))
        console.log(filenames)

        filePath = "uploads/thumbnails/" + filenames[0]
    })
    .on('end', function(){
        console.log('Screenshots token');
        return res.json({success: true, url: filePath, fileDuration: fileDuration });
    })
    .on('error', function (err) {
        console.log(err);
        return res.json({success: false, err});
    })
    .screenshot({ // 옵션
        // Will take screenshots at 20%, 40%, 60% and 80% of the video
        count: 3, // 3개의 썸네일 만들기
        folder: 'uploads/thumbnails', // 저장 경로
        size: '320x240', // 썸네일 사이즈
        //'%b': input basename (filename w/o extension) 확장자 제외 파일명
        filename: 'thumbnail-%b.png'
    })
})

module.exports = router;