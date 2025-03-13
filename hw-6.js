// Задание 1
const arr1 = [1, 5, 4, 10, 0, 3];

for (let idx1 = 0; idx1 < arr1.length; idx1++) {
    console.log(arr1[idx1]); // Выводим текущий элемент массива
    if (arr1[idx1] === 10) { // Проверяем, равен ли элемент 10
        break; // Прерываем цикл, если встретили 10
    }
}

// Задание 2
const arr2 = [1, 5, 4, 10, 0, 3];
const idx2 = arr2.indexOf(4); // Ищем индекс элемента 4

if (idx2 !== -1) {
    console.log(`Индекс значения 4: ${idx2}`);
} else {
    console.log('Значение 4 не найдено в массиве.');
}

// Задание 3
const arr3 = [1, 3, 5, 10, 20];
const result3 = arr3.join(' '); 
console.log(result3); // Выводим результат в консоль

// Задание 4
// Создаем пустой массив
const matrix4 = [];

// Внешний цикл: создаем строки (подмассивы)
for (let i4 = 0; i4 < 3; i4++) {
    const row4 = []; // Создаем пустой подмассив для каждой строки

    // Внутренний цикл: заполняем строку значениями 1
    for (let j4 = 0; j4 < 3; j4++) {
        row4.push(1); // Добавляем значение 1 в подмассив
    }

    matrix4.push(row4); // Добавляем готовый подмассив во внешний массив
}

console.log(matrix4); // Выводим результат в консоль

// Задание 5
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

// Задание 6
const arr6 = [9, 8, 7, 'a', 6, 5];

// Сортируем массив
const sortedArr6 = arr6.sort((a, b) => a - b);

// Удаляем букву 'a' с помощью filter
const filteredArr6 = sortedArr6.filter(item => typeof item === 'number');

// Выводим результат
console.log(filteredArr6);

// Задание 7
const arr7 = [9, 8, 7, 6, 5];

const userGuess7 = prompt("Угадайте число от 5 до 9:");

if (arr7.includes(Number(userGuess7))) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

// Задание 8
const originalString = 'abcdef';

// Преобразуем строку в массив символов
const charArray = originalString.split('');

// Переворачиваем массив
const reversedArray = charArray.reverse();

// Преобразуем массив обратно в строку
const reversedString = reversedArray.join('');

// Выводим результат в консоль
console.log(reversedString); // Вывод: 'fedcba'

// Задание 9
const nestedArray = [[1, 2, 3], [4, 5, 6]];

// Используем оператор spread для объединения массивов
const flatArray = [...nestedArray[0], ...nestedArray[1]];

// Выводим результат в консоль
console.log(flatArray); // Вывод: [1, 2, 3, 4, 5, 6]

// Задание 10
// Создаем массив с произвольными числами от 1 до 10
const randomNumbers = [3, 7, 1, 9, 4, 6, 2, 8, 5, 10];

// Перебираем массив с помощью цикла for
for (let i = 0; i < randomNumbers.length - 1; i++) {
    // Вычисляем сумму текущего и следующего элементов
    const sum = randomNumbers[i] + randomNumbers[i + 1];

    // Выводим результат в консоль
    console.log(`Сумма элементов ${randomNumbers[i]} и ${randomNumbers[i + 1]}: ${sum}`);
}

// Задание 11
// Функция, которая возвращает массив квадратов чисел
function getSquares(numbers) {
    // Используем метод map() для создания нового массива
    return numbers.map(number => number * number);
}

// Пример использования функции
const inputArray = [1, 2, 3, 4, 5];
const squaredArray = getSquares(inputArray);

// Выводим результат в консоль
console.log(squaredArray); // Вывод: [1, 4, 9, 16, 25]


// Задание 12
// Функция, которая возвращает массив длин строк
function getLengthsOfWords(words) {
    // Используем метод map() для создания нового массива
    return words.map(word => word.length);
}

// Пример использования функции
const wordsArray = ['apple', 'banana', 'cherry', 'date']; // Уникальное имя переменной
const lengthsArray = getLengthsOfWords(wordsArray);

// Выводим результат в консоль
console.log(lengthsArray); // Вывод: [5, 6, 6, 4]

// Задание 13
// Функция, которая возвращает массив отрицательных чисел
function getNegativeNumbers(numbers) {
    // Используем метод filter() для создания нового массива
    return numbers.filter(number => number < 0);
}

// Пример использования функции
const numbersArray = [1, -2, 3, -4, 5, -6]; // Уникальное имя переменной
const negativeNumbersArray = getNegativeNumbers(numbersArray);

// Выводим результат в консоль
console.log(negativeNumbersArray); // Вывод: [-2, -4, -6]

// Задание 14
// Создаем пустой массив для хранения случайных чисел
const randomNumbersArray = [];

// Генерируем 10 случайных чисел в диапазоне от 0 до 10 и добавляем их в массив
for (let i = 0; i < 10; i++) {
    randomNumbersArray.push(Math.floor(Math.random() * 11)); // Генерация числа от 0 до 10
}

// Используем метод filter() для создания массива с четными числами
const evenNumbersArray = randomNumbersArray.filter(number => number % 2 === 0);

// Выводим оба массива в консоль
console.log("Исходный массив:", randomNumbersArray);
console.log("Массив с четными числами:", evenNumbersArray);

// Задание 15
// Создаем пустой массив для хранения случайных чисел
const generatedNumbers = []; // Уникальное имя переменной

// Генерируем 6 случайных чисел в диапазоне от 1 до 10 и добавляем их в массив
for (let i = 0; i < 6; i++) {
    generatedNumbers.push(Math.floor(Math.random() * 10) + 1); // Генерация числа от 1 до 10
}

// Используем метод reduce() для суммирования всех элементов массива
const sum = generatedNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Вычисляем среднее арифметическое
const average = sum / generatedNumbers.length;

// Выводим результат в консоль
console.log("Сгенерированный массив:", generatedNumbers);
console.log("Среднее арифметическое:", average);