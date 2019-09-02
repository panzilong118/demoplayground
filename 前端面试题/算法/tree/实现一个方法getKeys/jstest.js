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
  },
  key9: {
    key10: 'str10'
  }
}

function getKeys(obj, val) {
    if (!obj || typeof obj !== 'object')
        return;

    for (let [k, v] of Object.entries(obj)) {
        if (v === val) {
          return [k];
        }
        // What you need to do is to check if the value is actually under the current node
        // and add the current key only if the answer is yes.
        let path = getKeys(v, val);
        if (path) {
          return [k, ...path];
        }
    }
}

const keys = getKeys(data, 'str1');
// const keys = getKeys(data, 'str3');
// const keys = getKeys(data, 'str6');
// const keys = getKeys(data, 'str2');
