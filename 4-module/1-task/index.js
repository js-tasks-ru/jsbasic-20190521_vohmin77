'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    let ulList = document.createElement('ul'); // Создаём новый список
    for (let i = 0; i < friends.length; i += 1) { // перебираем массив
    let newLi = document.createElement('li'); // создаём новый эпустой элемент списка
      for (let key in friends[i]) { // перебираем элемент массива (объект)
        newLi.innerHTML = (`${friends[i].firstName}, ${friends[i].lastName}`); // присваивваем элементу списка (li) значения
        ulList.appendChild(newLi); // присваиваем элемент списка (li) в список ul
      }
    }
    return ulList;
}
