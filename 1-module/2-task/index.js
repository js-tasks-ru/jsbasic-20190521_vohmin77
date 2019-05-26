'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid (name) {
    if (name == "" || name == null || name == undefined || name.length < 4 || name == '0' || name == false) {
        return false;
    } else
    for (let i = 0; i < name.length; i += 1) {
        if (name[i] == ' ') {
            return false;
        }
    }
    return true;
}

function sayHello () {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}

sayHello();

