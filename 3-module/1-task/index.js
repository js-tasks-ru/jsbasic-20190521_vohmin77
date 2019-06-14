/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let result = '';
  for (let i = 0; i < data.length; i += 1) {
    for (let key in data[i]) {
      if (data[i].age <= age) {
        result += (`${data[i].name}, ${data[i].balance}\n`);
      }
      break;
    }
  }
  return result.slice(0, result.length - 1);
}


