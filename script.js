// Обработчик для кнопки "Поехали!"
document.getElementById('go-button').addEventListener('click', function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Определяем, какая секция должна быть показана
    let targetSection;
    if (window.innerWidth < 768) {
        // Мобильная версия: скролл до блока "Мини-игры"
        targetSection = document.getElementById('minigames');
    } else {
        // Десктоп и планшет: скролл до блока "Об играх"
        targetSection = document.getElementById('games');
    }

    // Если целевая секция найдена, выполняем плавный скролл
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth', // Плавная анимация
            block: 'start'      // Выравнивание по верхней границе
        });
    } else {
        console.error('Целевая секция не найдена.');
    }
});

// Обработчик для карточек в секции "Об играх"
document.querySelectorAll('.games__card').forEach(card => {
    card.addEventListener('click', function (e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки
        const targetId = this.getAttribute('href'); // Получаем ID целевого элемента
        const targetElement = document.querySelector(targetId); // Находим целевой элемент

        if (targetElement) {
            // Плавный скролл до целевого элемента с выравниванием по центру
            targetElement.scrollIntoView({
                behavior: 'smooth', // Плавная анимация
                block: 'center'     // Выравнивание по центру
            });
        } else {
            console.error(`Элемент с ID "${targetId}" не найден.`);
        }
    });
});