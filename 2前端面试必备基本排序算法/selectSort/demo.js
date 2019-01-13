

function selectSort(arr){
  var min;
  for(var i=0; i<arr.length; i++){
    min = arr[i];
    for(var j=i+1; j<arr.length; j++){
      if(arr[j]<min){
        min = arr[j];
        var swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;
      }
    }
  }
  return arr;
}

var arr = [5,6,3,1,8,7,2,4];
selectSort(arr);
