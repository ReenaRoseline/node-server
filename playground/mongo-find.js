const {MongoClient, ObjectId} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp',(err,db)=>{
  if(err){
  return  console.log('unable to connect to db');
  }
  console.log('connected to db');


db.collection('Users').find({_id:new ObjectId('5a6f1bc98a69b70a58d5c9e5')}).toArray().then(( docs)=>{
  if(err){
    return console.log('unable to fetch',err);
}
  console.log('Users');
  console.log(JSON.stringify(docs,undefined,2));
}
);
//db.close();
});
