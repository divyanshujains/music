const { uploadAudio } = require("../services/storage.service");
const songModel = require("../models/song.model");

async function uploadSongcontroller(req, res) {
  try {
    const result = await uploadAudio(req.file.buffer);
    const { title, artist } = req.body;
    const Song = await songModel.create({
        artist,
        title,
        audio: result.url,
    })

    res.status(201).json({
        message: "Song uploaded successfully",
        song:
{
        title: Song.title,
        artist: Song.artist,    
        audio: Song.audio,
        poster:Song.poster
}    })
   
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({
      message: "Failed to upload song",
      error: err.message || err
    });
  }
}


async function getAllSongs(req, res){
  
    const songs = await songModel.find({});
    res.status(200).json({
        message: "All songs fetched successfully",
        songs
    })


}

async function getSongById(req, res) {

    const {id} = req.params;
   

    const song = await songModel.findOne({_id:id});
    if(song){

        res.status(200).json({
            message: "Song fetched successfully",
            song
        })
    }
    else{
        res.status(404).json({
            message: "Song not found"
        })
    }

}

async function searchsong(req , res){
    const query = req.query.keyword;

    const songs = await songModel.find({
        title:{
            $regex: query,
            $options: 'i' // case-insensitive search
        }
    })

    res.status(200).json({
        message: "Songs fetched successfully",
        songs
    })

}










module.exports = {
  uploadSongcontroller,
  getAllSongs,
  getSongById,
  searchsong
};
