// Игра "Камень, ножницы, бумага"
document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelector('#game5 .card__button').addEventListener('click', () => {
        
        const choices = ["камень", "ножницы", "бумага"];
        
        let userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase().trim();
        
        while (!choices.includes(userChoice)) {
            userChoice = prompt("Пожалуйста, введите корректный выбор: камень, ножницы или бумага").toLowerCase().trim();
               
            if (userChoice === null) return;
        }
        
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        
        let result = "Ничья!";
        if (userChoice !== computerChoice) {
            if (
                (userChoice === "камень" && computerChoice === "ножницы") ||
                (userChoice === "ножницы" && computerChoice === "бумага") ||
                (userChoice === "бумага" && computerChoice === "камень")
            ) {
                result = "Вы победили!";
            } else {
                result = "Компьютер победил!";
            }
        }
        
        alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n\n${result}`);
    });
});