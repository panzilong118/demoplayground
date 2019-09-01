/*
* 实现一个方法getKeys(data, str);
* getKeys(data, 'str1');
* 返回: 'key1'
* getKeys(data, 'str3');
* 返回: 'key2, key3'
* getKeys(data, 'str6');
* 返回: 'key2, key5, key6'
*
* Tencent interview question, fulfill getKeys(data, str) function using JS.
* get the key and all parents keys. can you help me?
*/

// traverse tree(json), fulfill getKeys(data, str) function using JS.
// get the key and all parents keys.
//
// const data = {
//   key1: 'str1',
//   key2: {
//     key3: 'str3',
//     key4: 'str4',
//     key5: {
//       key6: 'str6',
//       key7: 'str7',
//       key8: 'str8',
//     },
//   }
// }
//
// for example:
// getKeys(data, 'str1');
// return: 'key1'
// getKeys(data, 'str3');
// return: 'key2, key3'
// getKeys(data, 'str6');
// return: 'key2, key5, key6'
//
// I think it can be done be recursion, but how?

const data = {
  key1: 'str1',
  key2: {
    key3: 'str3',
    key4: 'str4',
    key5: {
      key6: 'str6',
      key7: 'str7',
      key8: 'str8',
    },
  }
}
let s = [];
function getKeys(data, str, key='') {
  if (key !== '') {
    s.push(key);
  }
  for (item in data) {
    if (typeof data[item] === 'object') {
      getKeys(data[item], str, item);
    } else if (data[item] === str) {
      s.push(item);
      return s;
    }
  }
  return s;
}

// const keys = getKeys(data, 'str1');
const keys = getKeys(data, 'str3');
// const keys = getKeys(data, 'str6');
// const keys = getKeys(data, 'str2');
