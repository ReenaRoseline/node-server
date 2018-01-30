var express=require('express');
var bodyParser= require('body-parser');

var {mongoose}= require('./db/mongoose.js');
var {Todo} =require('./models/todo.js');
var {User}= require('./models/user.js');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req ,res)=>{
var todo= new Todo({
  text:req.body.text
});
 todo.save((doc)=>{
   res.send(doc),
   (e)=>{
     res.status(400).send(e);
   }
 });
});

app.listen(3000,()=>{
  console.log('Listening on port 3000');
});

// var newTodo = new Todo({
//   text:'Birthday at 6'
// });
//
//
// newTodo.save().then((res)=>{
//   console.log('The todo is saved :',res)
// },(e)=>{
// return  console.log('Unable to save');
// });
// //
//
//
// var newUser= new User({
//    name:'Reena',
//   email:'reenaroseline@gmail.com',
//   phone:9449767377
// });
// newUser.save().then((res)=>{
//   console.log('The first user is: ',res);
// },(e)=>{
//   console.log('unable to save',e);
// });
