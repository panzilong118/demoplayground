

function insertSort(arr){
    for(var j=1;j<arr.length;j++){
      for(var i=j-1; i>=0; i--){
        if(arr[i] > arr[j]){
          var swap = arr[j];
          arr[j] = arr[i];
          arr[i] = swap;
          j--;
        }
      }
    }
    return arr;
}

// function insertSort(arr){
//     var tmp;
//     for(var i=1;i<arr.length;i++){
//         tmp  = arr[i];
//         for(var j=i;j>=0;j--){
//             if(arr[j-1]>tmp){
//                 arr[j]=arr[j-1];
//             }else{
//                 arr[j]=tmp;
//                 break;
//             }
//         }
//     }
//     return arr
// }

var arr = [5,6,3,1,8,7,2,4];
insertSort(arr);
