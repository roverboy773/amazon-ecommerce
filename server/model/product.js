const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    category:{
       type: String,
       required:true,
    },
    Image:{
        type:String,
        require:true
    },
    Price:{
        Type:Number,
        require:true,
    },
    mf:{
        type:String,
        require:true,
    },
    MfDate:{
        type:Date,
    }
})

module.exports=new mongoose.model('Product',productSchema);