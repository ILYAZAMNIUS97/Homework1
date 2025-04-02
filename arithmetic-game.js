// arithmetic-game.js

// Функция для генерации случайного числа в заданном диапазоне
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для генерации случайной арифметической задачи и вычисления ответа
const generateArithmeticProblem = () => {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[getRandomNumber(0, operators.length - 1)];
    
    let num1, num2, answer;
    
    // Генерация чисел и вычисление ответа в зависимости от оператора
    switch (operator) {
        case '+':
            num1 = getRandomNumber(1, 100);
            num2 = getRandomNumber(1, 100);
            answer = num1 + num2;
            break;
        case '-':
            num1 = getRandomNumber(1, 100);
            num2 = getRandomNumber(1, num1);
            answer = num1 - num2;
            break;
        case '*':
            num1 = getRandomNumber(2, 12); // Упрощаем умножение для лучшего игрового опыта
            num2 = getRandomNumber(2, 12);
            answer = num1 * num2;
            break;
        case '/':
            num2 = getRandomNumber(2, 10); // Делитель
            num1 = num2 * getRandomNumber(1, 10); // Гарантия целочисленного результата
            answer = num1 / num2;
            break;
    }
    
    return { num1, num2, operator, answer };
};

// Функция для проверки, является ли введенное значение числом
const isNumericInput = input => /^-?\d*\.?\d*$/.test(input);

// Основная функция игры
const startArithmeticGame = () => {
    const { num1, num2, operator, answer } = generateArithmeticProblem();
    const problemText = `${num1} ${operator} ${num2}`;
    
    let userInput;
    let validInput = false;
    
    while (!validInput) {
        userInput = prompt(`Решите задачу: ${problemText}\n\nВведите только число (используйте точку для десятичных дробей)`);
        
        // Проверка на отмену
        if (userInput === null) {
            alert('Игра отменена');
            return;
        }
        
        // Проверка на пустой ввод
        if (userInput.trim() === '') {
            alert('Пожалуйста, введите число.');
            continue;
        }
        
        // Проверка на числовой ввод
        if (!isNumericInput(userInput)) {
            alert('Пожалуйста, вводите только числа.');
            continue;
        }
        
        validInput = true;
    }
    
    const userAnswer = parseFloat(userInput);
    
    // Проверяем ответ
    if (!isNaN(userAnswer) && Math.abs(userAnswer - answer) < 0.001) {
        alert('Правильно! Молодец!');
    } else {
        alert(`Неправильно. Правильный ответ: ${answer}`);
    }
};

// Запуск игры при нажатии на кнопку "Играть"
document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('#game2 .card__button');
    if (playButton) {
        playButton.addEventListener('click', startArithmeticGame);
    }
});