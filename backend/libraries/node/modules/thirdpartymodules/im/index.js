var nm=require('nodemailer')

var transport=nm.createTransport({
    service:'gmail',
    auth:{
        user:'silva01guru@gmail.com',
        pass:'iamvenom1990'
    }
})

var mailOptions={
    from:'silva01guru@gmail.com',
    to:'waseemahmed116@gmail.com',
    subject:'Hello Sir',
    text:'Im Sivaguru, just finished third party modules (backend)'
};

transport.sendMail(mailOptions,(err,info)=>{
    if(err){
        console.log("Your mail not Send",err)
    }else{
        console.log("Your Mail Sent successfully")
    }
})