// arithmetic-game.js

// Функция для генерации случайного числа в заданном диапазоне
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для генерации случайной арифметической задачи
const generateArithmeticProblem = () => {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[getRandomNumber(0, operators.length - 1)];
    
    let num1, num2;
    
    // Генерация чисел в зависимости от оператора
    switch (operator) {
        case '+':
            num1 = getRandomNumber(1, 100);
            num2 = getRandomNumber(1, 100);
            break;
        case '-':
            num1 = getRandomNumber(1, 100);
            num2 = getRandomNumber(1, num1);
            break;
        case '*':
            num1 = getRandomNumber(2, 12); // Упрощаем умножение для лучшего игрового опыта
            num2 = getRandomNumber(2, 12);
            break;
        case '/':
            num2 = getRandomNumber(2, 10); // Делитель
            num1 = num2 * getRandomNumber(1, 10); // Гарантия целочисленного результата
            break;
    }
    
    return { num1, num2, operator };
};

// Функция для вычисления правильного ответа
const calculateAnswer = ({ num1, num2, operator }) => {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: return null;
    }
};

// Функция для проверки, является ли введенное значение числом
const isNumericInput = input => /^-?\d*\.?\d*$/.test(input);

// Основная функция игры
const startArithmeticGame = () => {
    const { num1, num2, operator } = generateArithmeticProblem();
    const problemText = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculateAnswer({ num1, num2, operator });
    
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
    if (!isNaN(userAnswer) && Math.abs(userAnswer - correctAnswer) < 0.001) {
        alert('Правильно! Молодец!');
    } else {
        alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
    }
};

// Запуск игры при нажатии на кнопку "Играть"
document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('#game2 .card__button');
    if (playButton) {
        playButton.addEventListener('click', startArithmeticGame);
    }
});