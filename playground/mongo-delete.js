const {MongoClient, ObjectId} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp',(err,db)=>{
  if(err){
  return  console.log('unable to connect to db');
  }
  console.log('connected to db');
//detele Many
db.collection('Users').deleteMany({name:'Rose'}).then((result)=>{
  console.log(result);
});
//delete deleteOne
// db.collection('Todos').deleteOne({text:'Birthday'}).then((result)=>{
//   console.log(result); });
//findOneDelte
db.collection('Users').findOneAndDelete({_id: new ObjectId('5a6f1251a652812c2c5f4038')}).then((results)=>{
  console.log(results);
});

//db.close();
});
