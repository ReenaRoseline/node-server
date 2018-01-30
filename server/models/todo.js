var mongoose= require('mongoose');

var Todo = mongoose.model('Todo',{
  text:{
    type: String,
    required:true
  },
  completed:{
    type:Boolean,
    default:true
  },
  CompletedAt:{
    type:Number,
    default:null
  }
})

module.exports={
  Todo
}
