/*
* 实现一个方法getKeys(data, str);
* getKeys(data, 'str1');
* 返回: 'key1'
* getKeys(data, 'str3');
* 返回: 'key2, key3'
* getKeys(data, 'str6');
* 返回: 'key2, key5, key6'
*/

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

function getKeys(data, str, prop) {
  if (let s === '')
  let s = '';
  Object.keys(data).forEach((key) => {
    if (data[key] === str) {
      s += key;
      return s;
    } else if (typeof data[key] === 'object'){
      getKeys(data[key], str, key);
    }
  });
}

const keys = getKeys(data, 'str1');
