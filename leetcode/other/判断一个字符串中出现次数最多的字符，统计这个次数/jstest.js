var str = 'ababbc';

var times = {};
var char = "";

// for(var i =0; i<str.length; i++){
//   char = str.charAt(i);
//   if(!times.hasOwnProperty(char)){
//     times[char] = 1;
//     for(var j=i+1; j<str.length; j++){
//       if(str.charAt(i) == str.charAt(j) ){
//           times[char]++;
//       }
//     }
//   }
// }
for(var i =0; i<str.length; i++){
  char = str.charAt(i);
  if(!times[char]){
    times[char] = 1;
  }else{
    times[char]++;
  }
}

var maxNum = 0;
var indexMax = 0;
for(item in times){
  console.log(item,"<----------item");
  console.log(times[item],"<-----------times[item]");
  if(times[item]>maxNum){
    maxNum = times[item];
    indexMax = item;
  }
}

console.log('出现次数最多的是:'+indexMax+'  出现'+maxNum+'次');
// for(item in times){
//   if(times[item]==maxNum){
//     console.log('出现次数最多的是:'+item+'出现'+maxNum+'次');
//   }
// }
