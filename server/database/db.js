import mongoose from 'mongoose'


const Connection = async ()=>{
try{
    const URL = 'mongodb+srv://admin:akshatisbest@blogweb.qszn7.mongodb.net/Blog?retryWrites=true&w=majority'
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
    console.log('database connected successfuly')
}catch(error){
    console.log('error while connecting to mongodb', error)
}
}

export default Connection