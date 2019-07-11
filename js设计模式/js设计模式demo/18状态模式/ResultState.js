var ResultState = function(){
  var States = {
    state0 : function(){
      console.log("this is 0")
    },
    state1 : function(){
      console.log("this is 1")
    },
    state2 : function(){
      console.log("this is 2")
    },
    state3 : function(){
      console.log("this is 3")
    }
  }

  function show(result){
    States['state'+result] && States['state'+result]();
  }

  return {
    show : show
  }
}();
