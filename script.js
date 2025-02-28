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
            // Плавный скролл до целевого элемента
            targetElement.scrollIntoView({
                behavior: 'smooth', // Плавная анимация
                block: 'start'      // Выравнивание по верхней границе
            });
        } else {
            console.error(`Элемент с ID "${targetId}" не найден.`);
        }
    });
});

// Примеры задач (оставлены без изменений)
let a = 10;
alert(a);
a = 20;
alert(a);

let firstIPhoneYear = 2007;
alert(firstIPhoneYear);

let creatorName = "Brendan Eich";
alert(creatorName);

let number1 = 10;
let number2 = 2;
alert(number1 + number2);
alert(number1 - number2);
alert(number1 * number2);
alert(number1 / number2);

let result = Math.pow(2, 5);
alert(result);

let numberA = 9;
let numberB = 2;
alert(numberA % numberB);

let number = 1;
number += 5;
number -= 3;
number *= 7;
number /= 3;
alert(number);

let age = prompt("Сколько вам лет?");
alert(age);

let user = {
    name: "Иван",
    age: 25,
    isAdmin: true
};

let userName = prompt("Как вас зовут?");
alert(`Привет, ${userName}!`);