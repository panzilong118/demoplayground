var DB = require('./db').DB;
var user = DB('user');
user.insert({name:'xiaobai',nick:'xiaobainickname'},function(docs){
      console.log(docs);
});
