// arithmetic-game.js

// Функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для генерации случайной арифметической задачи
function generateArithmeticProblem() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[getRandomNumber(0, operators.length - 1)]; // Случайный оператор
    let num1, num2;

    // Генерация чисел в зависимости от оператора
    if (operator === '+') {
        num1 = getRandomNumber(1, 100);
        num2 = getRandomNumber(1, 100);
    } else if (operator === '-') {
        num1 = getRandomNumber(1, 100);
        num2 = getRandomNumber(1, num1); // Убедимся, что результат не отрицательный
    } else if (operator === '*') {
        num1 = getRandomNumber(1, 20);
        num2 = getRandomNumber(1, 20);
    } else if (operator === '/') {
        num2 = getRandomNumber(1, 20); // Делитель
        num1 = num2 * getRandomNumber(1, 20); // Убедимся, что результат целый
    }

    return { num1, num2, operator };
}

// Функция для вычисления правильного ответа
function calculateAnswer(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return null;
    }
}

// Основная функция игры
function startArithmeticGame() {
    const { num1, num2, operator } = generateArithmeticProblem(); // Генерация задачи
    const problem = `${num1} ${operator} ${num2}`; // Формируем строку задачи
    const correctAnswer = calculateAnswer(num1, num2, operator); // Вычисляем правильный ответ

    // Запрашиваем ответ у пользователя
    const userAnswer = parseFloat(prompt(`Решите задачу: ${problem}`));

    // Проверяем ответ
    if (userAnswer === correctAnswer) {
        alert('Правильно! Молодец!');
    } else {
        alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
    }
}

// Назначаем функцию на кнопку "Играть!" в карточке №2
document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('#game2 .card__button');
    if (playButton) {
        playButton.addEventListener('click', startArithmeticGame);
    }
});