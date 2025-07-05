var ImageKit = require("imagekit");
const dotenv = require("dotenv");
dotenv.config();

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKITPUBICKEY,
    privateKey : process.env.IMAGEKITPRIVATEKEY,
    urlEndpoint : process.env.IMAGEKITENDPOINTURL 
});



function uploadAudio(file){
    return new Promise((resolve , reject)=>{
        imagekit.upload({
             file:file,
             folder:"spotify-clone",
             fileName:`audio-${Date.now()}.mp3`,
        },(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    })

}

module.exports = {
    uploadAudio
}