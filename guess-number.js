// Guess the Number Game

document.addEventListener('DOMContentLoaded', () => {
    // Find the play button for "Угадай число"
    const playButton1 = document.querySelector('#game1 .card__button');

    // Game function
    function playGuessNumberGame() {
        // Generate a random number between 1 and 100
        const targetNumber = Math.floor(Math.random() * 100) + 1;
        
        // Initial alert
        alert('Добро пожаловать в игру "Угадай число"! \nПопробуйте угадать число от 1 до 100.');
        
        let attempts = 0;
        let gameActive = true;

        while (gameActive) {
            // Get user's guess
            const userGuessString = prompt('Введите число от 1 до 100:');
            
            // Check if user cancelled
            if (userGuessString === null) {
                alert('Игра завершена.');
                break;
            }

            // Convert to number
            const userGuess = Number(userGuessString);
            
            // Validate input
            if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                alert('Пожалуйста, введите корректное число от 1 до 100');
                continue;
            }

            // Increment attempts
            attempts++;

            // Check the guess
            if (userGuess === targetNumber) {
                alert(`Поздравляю! Вы угадали число ${targetNumber} за ${attempts} попыток!`);
                gameActive = false;
            } else if (userGuess < targetNumber) {
                alert('Загаданное число больше');
            } else {
                alert('Загаданное число меньше');
            }
        }
    }

    // Add event listener to the play button
    playButton1.addEventListener('click', playGuessNumberGame);
});