const mongoose= require('mongoose');

var User=mongoose.model('User',{
  name:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  },
  email:{
    type:String
  },
  phone:{
    type:Number
  }
});

module.exports={
  User
}
