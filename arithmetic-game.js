// arithmetic-game.js
// Функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для генерации случайной арифметической задачи
function generateArithmeticProblem() {
    const operators = ['+', '-', '*', '/'];
    const operatorIndex = getRandomNumber(0, operators.length - 1);
    const operator = operators[operatorIndex];
    
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
            const multiplier = getRandomNumber(1, 10);
            num1 = num2 * multiplier; // Гарантия целочисленного результата
            break;
    }
    
    return { num1, num2, operator };
}

// Функция для вычисления правильного ответа
function calculateAnswer({ num1, num2, operator }) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: return null;
    }
}

// Функция для проверки, является ли введенное значение числом
function isNumericInput(input) {
    // Проверяем, что ввод - это число, учитывая возможность десятичных дробей
    // Регулярное выражение соответствует числам с точкой или без
    return /^-?\d*\.?\d*$/.test(input);
}

// Основная функция игры
function startArithmeticGame() {
    const problem = generateArithmeticProblem();
    const { num1, num2, operator } = problem;
    const problemText = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculateAnswer(problem);
    
    // Запрашиваем ответ у пользователя с указанием, что нужно ввести число
    let userInput;
    let validInput = false;
    
    while (!validInput) {
        userInput = prompt(`Решите задачу: ${problemText}\n\nВведите только число (используйте точку для десятичных дробей)`);
        
        // Проверка на отмену
        if (userInput === null) {
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
}

// Запуск игры при нажатии на кнопку "Играть"
document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('#game2 .card__button');
    if (playButton) {
        playButton.addEventListener('click', startArithmeticGame);
    }
});