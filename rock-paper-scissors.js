// Игра "Камень, ножницы, бумага"
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем обработчик события клика на кнопку
    document.querySelector('#game5 .card__button').addEventListener('click', function() {
        // Массив с возможными вариантами
        const choices = ["камень", "ножницы", "бумага"];
        
        // Получаем выбор пользователя через prompt()
        let userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase().trim();
        
        // Проверяем корректность ввода пользователя
        while (!choices.includes(userChoice)) {
            userChoice = prompt("Пожалуйста, введите корректный выбор: камень, ножницы или бумага").toLowerCase().trim();
            
            // Если пользователь нажал "Отмена", прекращаем игру
            if (userChoice === null) return;
        }
        
        // Генерируем случайный выбор компьютера
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        
        // Определяем победителя и выводим результат
        let result = "Ничья!";
        if (userChoice === computerChoice) {
            // Результат остается "Ничья!"
        } else if (
            (userChoice === "камень" && computerChoice === "ножницы") ||
            (userChoice === "ножницы" && computerChoice === "бумага") ||
            (userChoice === "бумага" && computerChoice === "камень")
        ) {
            result = "Вы победили!";
        } else {
            result = "Компьютер победил!";
        }
        
        // Выводим результат
        alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n\n${result}`);
    });
});