/*
* 用原生js实现String的indexOf方法
*/

function functionIndexOf(str, searchValue, fromIndex) {
  let index = -1;
  const searchValueLen = searchValue.length;
  for (let i = 0; i < paragraph.length; i++) {
    let slicedStr = paragraph.slice(i, i + searchValueLen);
    if (slicedStr === searchValue) {
      return i;
    }
  }
  return index;
}

var paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

var searchTerm = 'dogs';

const idx = functionIndexOf(paragraph, searchTerm);
