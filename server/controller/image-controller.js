// import grid from 'gridfs-stream'
// import mongoose from 'mongoose'


// const URL = 'http://localhost:8000'

// let gfs;
// const conn = mongoose.connection;
// conn.once('open', () => {
//     gfs = grid(conn.db, mongoose.mongo);
//     gfs.collection('fs');
// });


// export const uploadImage = (req, res) => {
//     try {
//         if(!req.file)
//             return res.status(400).json('file not found')
//         const imgURL = `${URL}/file/${req.file.filename}`
//         res.status(200).json(imgURL)
        
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }


// export const getImage = async (request, response) => {
//     try {   
//         const file = await gfs.files.findOne({ filename: request.params.filename });
//         const readStream = gfs.createReadStream(file.filename);
//         readStream.pipe(response);
//     } catch (error) {
//         response.status('Failed to fetch image',500).json(error);
//     }
// }