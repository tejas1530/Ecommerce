const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please enter product descprition"]
    },
    price:{
        type:Number,
        required:[true,"Please enter product price"],
        maxLength:[6,"price cannot exceed six digits"]
    },
    ratings:{
        type:Number,
        default:0
    },
    images:[
        {
            public_ID:{
                type:String,
                required:true
            },
            URL:{
                type:String,
                required:true
            },
        }
    ],
    category:{
        type:String,
        required:[true,"please enter product category"]
    },

    stock:{
        type:Number,
        required:[true,"please enter product stock"],
        maxLength:[4,"stock cannot exist more than 4 character "],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    Reviews:[
         {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }

         }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }

})


module.exports = mongoose.model("product",productSchema)