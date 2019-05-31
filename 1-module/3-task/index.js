'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let newStr = '';
  let arr = [];
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== ' ') {
      newStr += str[i];
    } else if (str[i] === ' ' && str[i - 1] !== ',') {
      newStr += ',';
    }
  }

  arr = newStr.split(',');

  for (let i = 0; i < newStr.length; i += 1) {
    if (isNaN(+arr[i] * 2)) {
      arr.splice(i, 1);
    }
  }

  function compareNumeric(a, b) {
    if (a * 100 > b * 100) return 1;
    if (a * 100 < b * 100) return -1;
  }

  arr.sort(compareNumeric);

  arr.splice(1, arr.length - 2);

  return { min: +arr[0], max: +arr[1] };
}
