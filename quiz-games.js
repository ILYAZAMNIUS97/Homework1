// Массив вопросов и правильных ответов
const quiz = [
    {
        question: "Какой цвет неба?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

// Находим кнопку "Играть" в карточке игры "Викторина"
const quizButton = document.querySelector('#game4 .card__button');

// Добавляем обработчик события на кнопку
quizButton.addEventListener('click', () => {
    let correctCount = 0; // Счетчик правильных ответов
    let userAnswers = []; // Массив для хранения ответов пользователя

    // Проходим по каждому вопросу
    for (let i = 0; i < quiz.length; i++) {
        const item = quiz[i];

        // Формируем текст вопроса с вариантами ответов
        const questionText = `${item.question}\n${item.options.join("\n")}`;

        // Запрашиваем ответ у пользователя
        let userAnswer;
        while (true) {
            userAnswer = prompt(questionText);

            // Если пользователь нажал "Отмена", завершаем игру
            if (userAnswer === null) {
                alert("Игра отменена.");
                return;
            }

            // Проверяем, что введено число от 1 до 3
            if (/^[1-3]$/.test(userAnswer)) {
                break; // Выходим из цикла, если ввод корректен
            } else {
                alert("Пожалуйста, введите число от 1 до 3.");
            }
        }

        // Сохраняем ответ пользователя
        userAnswers.push(userAnswer);

        // Проверяем ответ
        if (parseInt(userAnswer) === item.correctAnswer) {
            correctCount++; // Увеличиваем счетчик правильных ответов
        }
    }

    // Формируем сообщение с результатами
    let resultMessage = `Вы ответили правильно на ${correctCount} из ${quiz.length} вопросов!\n\n`;

    // Добавляем правильные ответы для каждого вопроса
    quiz.forEach((item, index) => {
        const userAnswer = userAnswers[index];
        const userAnswerText = item.options[userAnswer - 1] || "Нет ответа";

        resultMessage += `Вопрос: ${item.question}\n`;
        resultMessage += `Ваш ответ: ${userAnswerText}\n`;
        resultMessage += `Правильный ответ: ${item.options[item.correctAnswer - 1]}\n\n`;
    });

    // Выводим результат
    alert(resultMessage);
});