const MongoClient =require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todoApp',(err,db)=>{
  if(err){
  return  console.log('unable to connect to db');
  }
  console.log('connected to db');
  //
  // db.collection('Todos').insertOne(
  //   {
  //     text:'something about todo',
  //     completes:false
  //   },(err,result)=>{
  //     if(err){
  //       return console.log('Ubnable to insert to db', err);
  //     }
  //     console.log(JSON.stringify(result.ops,undefined,2));
  //   }
  // );

  db.collection('Users').insertOne(
    {
      name:'Sebastin',
      age:37,
      location:'stockholm',
      completed:true
    },(err,result)=>{
      if(err){
        return console.log('unable to insert');
      }
      console.log(JSON.stringify(result.ops,undefined,2));
    }
  );
db.close();
});
