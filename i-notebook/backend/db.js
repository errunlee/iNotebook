const mongoose=require('mongoose')
const mongoURI='mongodb+srv://errunlee:csidb977@cluster0.tcw7sei.mongodb.net/test'
mongoose.set('strictQuery', false);
const connectToMongo=async ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('connected..')
    })
}

module.exports=connectToMongo;