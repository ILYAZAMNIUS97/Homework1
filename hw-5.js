// Задание 1
// Функция для нахождения меньшего из двух чисел
function minNumber(a, b) {
    // Возвращаем меньшее число
    return a < b ? a : b;
}

// Проверка работы функции с указанными в условии примерами
console.log(minNumber(8, 4));  // Должно вывести 4
console.log(minNumber(6, 6));  // Должно вывести 6

// Задание 2
function checkEvenOrOdd(number) {
    // Проверяем, является ли число чётным
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(checkEvenOrOdd(4));   // "Число четное"
console.log(checkEvenOrOdd(7));   // "Число нечетное"

// Задание 3
// 1
function printSquare(number) {
    const square = number * number; // Вычисляем квадрат числа
    console.log(`Квадрат числа ${number} равен ${square}`);
}

printSquare(5); // Выведет: "Квадрат числа 5 равен 25"

// 2
function getSquare(number) {
    return number * number; // Возвращаем квадрат числа
}

const result1 = getSquare(4); // result1 = 16
const result2 = getSquare(6); // result2 = 36

console.log(result1); // Выведет: 16
console.log(result2); // Выведет: 36

// Задание 4
function askUserAge() {
    // Запрашиваем возраст у пользователя
    const ageInput = prompt('Сколько вам лет?');
    
    // Преобразуем введённое значение в число
    const age = parseInt(ageInput, 10);
    
    // Объединяем проверки на неправильные значения (не число или отрицательное число)
    if (isNaN(age) || age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

// Вызываем функцию
askUserAge();

// Задание 5
function multiplyNumbers(num1, num2) {
    // Преобразуем параметры в числа (на случай, если переданы строки)
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Проверяем, являются ли оба параметра корректными числами
    if (isNaN(number1) || isNaN(number2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        // Возвращаем произведение чисел
        return number1 * number2;
    }
}

console.log(multiplyNumbers(5, 3)); // Выведет: 15
console.log(multiplyNumbers('4', 2)); // Выведет: 8
console.log(multiplyNumbers('abc', 10)); // Выведет: "Одно или оба значения не являются числом"
console.log(multiplyNumbers(7, 'xyz')); // Выведет: "Одно или оба значения не являются числом"
console.log(multiplyNumbers('10', '20')); // Выведет: 200

// Задание 6
function calculateCube() {
    // Запрашиваем число у пользователя
    const userInput = prompt('Введите число:');

    // Преобразуем введённое значение в число
    const number = parseFloat(userInput);

    // Проверяем, является ли введённое значение числом
    if (isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
        // Вычисляем куб числа
        const cube = number ** 3; // или number * number * number
        return `${number} в кубе равняется ${cube}`;
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(calculateCube(i));
}

// Задание 7
// Выносим функции для вычисления площади и периметра круга отдельно
const circleMethods = {
    // Метод для вычисления площади круга
    getArea: function() {
        return Math.PI * this.radius ** 2; // Площадь круга: π * r²
    },
    
    // Метод для вычисления периметра окружности
    getPerimeter: function() {
        return 2 * Math.PI * this.radius; // Периметр окружности: 2 * π * r
    }
};

// Создаем объекты кругов
const circle1 = {
    radius: 5, // Радиус первого круга
};

const circle2 = {
    radius: 10, // Радиус второго круга
};

// Привязываем методы к объектам с помощью Object.assign
Object.assign(circle1, circleMethods);
Object.assign(circle2, circleMethods);

console.log(circle1.getArea());      // Выведет: 78.53981633974483
console.log(circle1.getPerimeter()); // Выведет: 31.41592653589793

console.log(circle2.getArea());      // Выведет: 314.1592653589793
console.log(circle2.getPerimeter()); // Выведет: 62.83185307179586