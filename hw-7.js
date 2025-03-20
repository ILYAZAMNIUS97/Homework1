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
        console.log(Math.floor(Math.random() * 10) + 1);
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

// Задание 7
{
    function getRandomNumberInRange(minValueB, maxValueB) {
        // Проверяем, что входные данные — целые числа
        if (!Number.isInteger(minValueB) || !Number.isInteger(maxValueB)) {
            console.error("Пожалуйста, передайте целые числа.");
            return null;
        }

        // Проверяем, что minValueB меньше maxValueB
        if (minValueB >= maxValueB) {
            console.error("Первое число должно быть меньше второго.");
            return null;
        }

        // Генерируем случайное число в диапазоне [minValueB, maxValueB]
        const randomNumberB = Math.floor(Math.random() * (maxValueB - minValueB + 1)) + minValueB;

        return randomNumberB;
    }

    // Пример использования:
    const minValueB = 5;
    const maxValueB = 15;
    const randomResult = getRandomNumberInRange(minValueB, maxValueB);
    console.log("Случайное число в диапазоне:", randomResult); // Пример вывода: 7, 12, 15 и т.д.
}

// Задание 8
{
    // Создаем объект Date, который содержит текущую дату и время
    const currentDate = new Date();

    // Выводим текущую дату в консоль
    console.log("Текущая дата:", currentDate);
}

// Задание 9
{
    // Создаем переменную currentDate, хранящую текущую дату
    let currentDate = new Date();

    // Выводим текущую дату для проверки
    console.log("Текущая дата:", currentDate);

    // Получаем текущий день месяца
    let currentDay = currentDate.getDate();

    // Устанавливаем новую дату, добавив 73 дня к текущей дате
    currentDate.setDate(currentDay + 73);

    // Выводим дату, которая наступит через 73 дня
    console.log("Дата через 73 дня:", currentDate);
}

// Задание 10
{
    function formatDate(date) {
        // Массивы для перевода месяцев и дней недели на русский язык
        const months = [
            "января", "февраля", "марта", "апреля", "мая", "июня",
            "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ];
        const daysOfWeek = [
            "воскресенье", "понедельник", "вторник", "среда",
            "четверг", "пятница", "суббота"
        ];
    
        // Получаем компоненты даты
        const day = date.getDate(); // День месяца
        const month = months[date.getMonth()]; // Месяц (на русском)
        const year = date.getFullYear(); // Год
        const dayOfWeek = daysOfWeek[date.getDay()]; // День недели (на русском)
    
        // Получаем компоненты времени
        const hours = String(date.getHours()).padStart(2, '0'); // Часы (с ведущим нулем)
        const minutes = String(date.getMinutes()).padStart(2, '0'); // Минуты (с ведущим нулем)
        const seconds = String(date.getSeconds()).padStart(2, '0'); // Секунды (с ведущим нулем)
    
        // Формируем строку в требуемом формате
        return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
    }
    
    // Пример использования
    const exampleDate = new Date(); // Текущая дата и время
    console.log(formatDate(exampleDate));
}

