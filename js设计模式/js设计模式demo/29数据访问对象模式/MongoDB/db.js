var mongodb = require('mongodb');
var config = require('./config').DB;
var d = new mongodb.Db(
  config.db,
  new mongodb.Server(
    config.host,
    config.port,
    {auto_reconnect:true}
  ),
  {safe:true}
);

exports.DB = function(col){
  return {
    insert:function(data,success,fail){
      connect(col,function(col,db){
        col.insert(data,function(err,docs){
          if(err){
            fail && fail(err);
          }else{
            success && success(docs);
          }
          db.close();
        });
      });
    },
    remove:function(){},
    update:function(){},
    find:function(){}
  }
}

function connect(col,fn){
  d.open(function(err,db){
    if(err){
      throw err;
    }else{
      db.collection(col,function(err,col){
        if(err){
          throw err;
        }else{
          fn && fn(col,db);
        }
      });
    }
  });
}
