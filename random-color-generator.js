document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#game6 .card__button')?.addEventListener('click', () => {
        const minigamesSection = document.querySelector('.minigames');
        if (!minigamesSection) return;

        const originalColor = 'rgb(32, 32, 39)';
        
        // Создаем и добавляем информационную панель
        const colorInfo = Object.assign(document.createElement('div'), {
            style: `
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                padding: 12px 24px;
                background: rgba(0,0,0,0.8);
                color: white;
                border-radius: 8px;
                z-index: 1000;
                font-family: 'Montserrat', sans-serif;
            `
        });
        document.body.appendChild(colorInfo);

        // Основная логика игры
        const startColorGame = () => {
            const getRandomColor = () => 
                `rgb(${[1,1,1].map(() => Math.floor(Math.random() * 256)).join(',')})`;
            
            const userWantsToPlay = confirm(
                'Игра: "Генератор случайных цветов!"\n' +
                'Нажми "OK" - смени цвет фона\n' +
                'Нажми "Отмена" - верни исходный цвет фона и заверши игру'
            );
            
            userWantsToPlay 
                ? (() => {
                    const newColor = getRandomColor();
                    minigamesSection.style.backgroundColor = newColor;
                    colorInfo.textContent = `Сгенерированный цвет фона: ${newColor}`;
                    setTimeout(startColorGame, 100);
                })()
                : (() => {
                    minigamesSection.style.backgroundColor = originalColor;
                    colorInfo.textContent = 'Возвращен исходный фон';
                    setTimeout(() => colorInfo.remove(), 2000);
                })();
        };

        startColorGame();
    });
});