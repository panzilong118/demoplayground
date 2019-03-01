function findMaxDuplicateChar(str) {
  let maxChar = '';
  let maxValue = 1;
  var obj = {};
  for (var i=0; i<str.length; i++){
    if(str.charAt(i) !== " "){
      if(!obj[str.charAt(i)]){
        obj[str.charAt(i)] = 1;
      } else {
        obj[str.charAt(i)]++;
      }
    }
  }

  for(var i in obj){
    if(obj[i]>maxValue){
      maxValue = obj[i];
      maxChar = i;
    }
  }
  console.log(maxValue, '<--------maxValue');
  console.log(maxChar, '<--------maxChar');
  return {
    maxChar,
    maxValue
  };
}

const str = 'this is a fe test at toutiao on September';
findMaxDuplicateChar(str);
