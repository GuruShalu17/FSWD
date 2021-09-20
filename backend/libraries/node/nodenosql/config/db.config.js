const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/gurushalu',{useNewUrlParser:true,useUnifiedTopology:true},

(err,link)=>{
    if(err){
        console.log("err",err)
    }else{
        console.log(
            "db connected"
        )
    }
}

)