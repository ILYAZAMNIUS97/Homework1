// task1
let password = 'пароль';
let userInput = prompt('Введите пароль');

if (userInput === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

// task2
let numberC = 2; // Меняйте значение переменной для проверки: 0, 10, -3, 2

if (numberC > 0 && numberC < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// task3
let numberD = 50;
let numberE = 120; // Меняйте значения переменных для проверки

if (numberD > 100 || numberE > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// task4
let numA = '2';
let numB = '3';

// Исправленный код
alert(Number(numA) + Number(numB)); // Выведет 5

// task5
let monthNumber = 12; // Меняйте значение переменной для проверки

if (monthNumber < 1 || monthNumber > 12) {
    console.log('Некорректный номер месяца');
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
        default:
            console.log('Некорректный номер месяца');
    }
}