const mongoose=require('mongoose')
const mongoURI='mongodb://localhost:27017'
mongoose.set('strictQuery', false);
const connectToMongo=async ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('connected..')
    })
}

module.exports=connectToMongo;