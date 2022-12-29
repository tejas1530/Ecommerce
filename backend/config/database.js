const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDatabase=()=>{
    mongoose.connect(process.env.URI,{useUnifiedTopology: true , family: 4}).then((data)=>{
        console.log(`MongoDB connected with server : ${data.connection.host}`)
        }).catch((error)=>{
            console.log(error);
        })
}

module.exports= connectDatabase