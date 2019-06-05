/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */

function isEmpty (obj) {
  var counter = 0;
  for (var key in obj) {
    counter++;
  }
  return counter > 0 ? false : true;
}
