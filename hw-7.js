// Задание 1
const str = 'js'; // Исходная строка
const upperCaseStr = str.toUpperCase(); // Преобразуем в верхний регистр

console.log(upperCaseStr); // Вывод: "JS"

// Задание 2
function filterStringsStartingWith(arr, prefix) {
    // Приводим префикс к нижнему регистру
    const lowerCasePrefix = prefix.toLowerCase();

    // Фильтруем массив, оставляя только строки, которые начинаются с префикса
    return arr.filter(str => str.toLowerCase().startsWith(lowerCasePrefix));
}

// Пример использования:
const words = ["Apple", "Banana", "apricot", "Avocado", "berry", "apartment"];
const prefix = "ap";

const result = filterStringsStartingWith(words, prefix);
console.log(result); // Вывод: ["Apple", "apricot", "apartment"]

// Задание 3
const number = 32.58884;

// 1. Округление до меньшего целого
const floorResult = Math.floor(number);
console.log("До меньшего целого:", floorResult); // Вывод: 32

// 2. Округление до большего целого
const ceilResult = Math.ceil(number);
console.log("До большего целого:", ceilResult); // Вывод: 33

// 3. Округление до ближайшего целого
const roundResult = Math.round(number);
console.log("До ближайшего целого:", roundResult); // Вывод: 33

// Задание 4
const numbers = [52, 53, 49, 77, 21, 32];

// Находим минимальное значение
const minValue = Math.min(...numbers);

// Находим максимальное значение
const maxValue = Math.max(...numbers);

// Выводим результаты в консоль
console.log("Минимальное значение:", minValue); // Вывод: 21
console.log("Максимальное значение:", maxValue); // Вывод: 77

// Задание 5
function getRandomNumber() {
    // Генерируем случайное число от 0 (включительно) до 1 (не включительно)
    const randomFraction = Math.random();

    // Умножаем на 10, чтобы получить число от 0 (включительно) до 10 (не включительно)
    const randomNumber = randomFraction * 10;

    // Округляем вниз до ближайшего целого числа
    const randomInteger = Math.floor(randomNumber);

    // Добавляем 1, чтобы получить число от 1 до 10
    const result = randomInteger + 1;

    // Выводим результат в консоль
    console.log(result);
}

// Пример использования:
getRandomNumber(); // Выведет случайное число от 1 до 10

// Задание 6
function generateRandomArray(num) {
    // Проверяем, что число положительное и целое
    if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
        console.error("Пожалуйста, передайте положительное целое число.");
        return [];
    }

    // Вычисляем длину массива (в два раза меньше переданного числа)
    const length = Math.floor(num / 2);

    // Создаем массив случайных чисел
    const randomNumbers = Array.from({ length }, () => Math.floor(Math.random() * (num + 1)));

    return randomNumbers;
}

// Пример использования:
const num = 10;
const generatedArray = generateRandomArray(num);
console.log(generatedArray); // Пример вывода: [3, 7, 0, 5, 2]

// Задание 7
