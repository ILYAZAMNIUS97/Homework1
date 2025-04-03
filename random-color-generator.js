document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#game6 .card__button')?.addEventListener('click', () => {
        // Получаем элемент-обертку для секции "Мини игры"
        const minigamesWrapper = document.getElementById('minigames');
        if (!minigamesWrapper) return;
        
        // Сохраняем оригинальный цвет фона
        const originalColor = window.getComputedStyle(minigamesWrapper).backgroundColor || 'rgb(32, 32, 39)';
        
        // Создаем элемент для отображения информации о текущем цвете
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
        
        // Функция игры
        const startColorGame = () => {
            // Функция для генерации случайного цвета
            const getRandomColor = () => 
                `rgb(${[1,1,1].map(() => Math.floor(Math.random() * 256)).join(',')})`;
            
            // Запрос пользователю
            const userWantsToPlay = confirm(
                'Игра: "Генератор случайных цветов!"\n' +
                'Нажми "OK" - смени цвет фона\n' +
                'Нажми "Отмена" - верни исходный цвет фона и заверши игру'
            );
            
            // Обработка выбора пользователя
            if (userWantsToPlay) {
                const newColor = getRandomColor();
                // Прямое изменение атрибута style у элемента-обертки
                minigamesWrapper.style.backgroundColor = newColor;
                colorInfo.textContent = `Сгенерированный цвет фона: ${newColor}`;
                setTimeout(startColorGame, 100);
            } else {
                // Восстановление исходного цвета
                minigamesWrapper.style.backgroundColor = originalColor;
                colorInfo.textContent = 'Возвращен исходный фон';
                setTimeout(() => colorInfo.remove(), 2000);
            }
        };
        
        // Запуск игры
        startColorGame();
    });
});