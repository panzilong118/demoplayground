var MarryState = function(){
  var _currentState = {},
      states = {
        jump:function(){
          console.log("jump");
        },
        move:function(){
          console.log("move");
        },
        shoot:function(){
          console.log("shoot");
        },
        squat:function(){
          console.log("squat");
        }
      };

  var Action = {
    changeState:function(){
      var arg = arguments;
      _currentState = {};
      if(arg.length){
        for(var i = 0, len = arg.length; i<len; i++){
          _currentState[arg[i]] = true;
        }
      }
      return this;
    },
    goes : function(){
      console.log("trigger a action");
      for (var i in _currentState){
        states[i] && states[i]();
      }
      return this;
    }
  }

  return {
    change:Action.changeState,
    goes:Action.goes
  }
}

var marry = new MarryState();
marry
   .change('jump','shoot')
   .goes()
   .goes()
   .change('shoot')
   .goes();
