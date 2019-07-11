var Observer = (function(){
  var __messages = {};
  return {
    regist:function(type,fn){
      if(typeof __messages[type] === 'undefined'){
        __messages[type] = [fn];
      }else{
        __messages[type].push(fn);
      }
    },
    fire:function(type,args){
      if(!__messages[type])
        return;
      var events = {
        type:type,
        args:args||[]
      },
      i = 0,
      len = __messages[type].length;
      for(; i<len; i++){
        __messages[type][i].call(this,events);
      }
    },
    remove:function(type,fn){
      if(__messages[type] instanceof Array){
        var i = __messages[type].length -1;
        for(; i>=0; i--){
          __messages[type][i] === fn && __messages[type].splice(i,1);
        }
      }
    }
  }
})();

var Student = function(result){
  var that = this;
  that.result = result;
  that.say = function(){
    console.log(that.result);
  }
}

Student.prototype.answer = function(question){
  Observer.regist(question,this.say);
}

Student.prototype.sleep = function(question){
  console.log(this.result + " "+ question + "has been canceled");
  Observer.remove(question,this.say)
}

var Teacher = function(){};

Teacher.prototype.ask = function(question){
  console.log('question is: '+question);
  Observer.fire(question);
}

var student1 = new Student('student1 answer question');
var student2 = new Student('student2 answer question');
var student3 = new Student('student3 answer question');

student1.answer('what');
student1.answer('how');
student2.answer('what');
student3.answer('what');
student3.answer('how');

student3.sleep('how');

var teacher = new Teacher();

teacher.ask('what');
teacher.ask('how');
