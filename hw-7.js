// Задание 1
{
    const strA = 'js'; // Исходная строка
    const upperCaseStrA = strA.toUpperCase(); // Преобразуем в верхний регистр

    console.log(upperCaseStrA); // Вывод: "JS"
}

// Задание 2
{
    function filterStringsStartingWith(arr, prefix) {
        // Приводим префикс к нижнему регистру
        const lowerCasePrefixA = prefix.toLowerCase();

        // Фильтруем массив, оставляя только строки, которые начинаются с префикса
        return arr.filter(str => str.toLowerCase().startsWith(lowerCasePrefixA));
    }

    // Пример использования:
    const wordsA = ["Apple", "Banana", "apricot", "Avocado", "berry", "apartment"];
    const prefixA = "ap";

    const resultA = filterStringsStartingWith(wordsA, prefixA);
    console.log(resultA); // Вывод: ["Apple", "apricot", "apartment"]
}

// Задание 3
{
    const numberA = 32.58884;

    // 1. Округление до меньшего целого
    const floorResultA = Math.floor(numberA);
    console.log("До меньшего целого:", floorResultA); // Вывод: 32

    // 2. Округление до большего целого
    const ceilResultA = Math.ceil(numberA);
    console.log("До большего целого:", ceilResultA); // Вывод: 33

    // 3. Округление до ближайшего целого
    const roundResultA = Math.round(numberA);
    console.log("До ближайшего целого:", roundResultA); // Вывод: 33
}

// Задание 4
{
    const numbersA = [52, 53, 49, 77, 21, 32];

    // Находим минимальное значение
    const minValueA = Math.min(...numbersA);

    // Находим максимальное значение
    const maxValueA = Math.max(...numbersA);

    // Выводим результаты в консоль
    console.log("Минимальное значение:", minValueA); // Вывод: 21
    console.log("Максимальное значение:", maxValueA); // Вывод: 77
}

// Задание 5
{
    function getRandomNumberA() {
        // Генерируем случайное число от 0 (включительно) до 1 (не включительно)
        const randomFractionA = Math.random();

        // Умножаем на 10, чтобы получить число от 0 (включительно) до 10 (не включительно)
        const randomNumberA = randomFractionA * 10;

        // Округляем вниз до ближайшего целого числа
        const randomIntegerA = Math.floor(randomNumberA);

        // Добавляем 1, чтобы получить число от 1 до 10
        const resultB = randomIntegerA + 1;

        // Выводим результат в консоль
        console.log(resultB);
    }

    // Пример использования:
    getRandomNumberA(); // Выведет случайное число от 1 до 10
}

// Задание 6
{
    function generateRandomArrayA(num) {
        // Проверяем, что число положительное и целое
        if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
            console.error("Пожалуйста, передайте положительное целое число.");
            return [];
        }

        // Вычисляем длину массива (в два раза меньше переданного числа)
        const lengthA = Math.floor(num / 2);

        // Создаем массив случайных чисел
        const randomNumbersA = Array.from({ length: lengthA }, () => Math.floor(Math.random() * (num + 1)));

        return randomNumbersA;
    }

    // Пример использования:
    const numA = 10;
    const generatedArrayA = generateRandomArrayA(numA);
    console.log(generatedArrayA); // Пример вывода: [3, 7, 0, 5, 2]
}