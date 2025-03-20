// Функция для переворачивания текста
function reverseText(text) {
    return text.split("").reverse().join("");
}

// Функция для проверки, что введенный текст не содержит цифр
function isValidText(text) {
    // Регулярное выражение: разрешены только буквы, пробелы и знаки препинания
    const regex = /^[a-zA-Zа-яА-Я\s\.,!?-]+$/;
    return regex.test(text);
}

// Находим кнопку "Играть" в карточке игры "Переверни текст"
const flipTextButton = document.querySelector('#game3 .card__button');

// Добавляем обработчик события на кнопку
flipTextButton.addEventListener('click', () => {
    let userText;

    // Запрашиваем текст у пользователя, пока он не введет корректный текст
    while (true) {
        userText = prompt("Введите текст, который хотите перевернуть (только буквы и пробелы):");

        // Если пользователь нажал "Отмена", выходим из цикла
        if (userText === null) {
            alert("Игра отменена.");
            return;
        }

        // Проверяем, что текст корректен
        if (isValidText(userText)) {
            break; // Выходим из цикла, если текст корректен
        } else {
            alert("Некорректный ввод! Пожалуйста, введите только текст (без цифр).");
        }
    }

    // Переворачиваем текст
    const reversedText = reverseText(userText);

    // Выводим результат
    alert("Перевернутый текст: " + reversedText);
});