document.getElementById('go-button').addEventListener('click', function (event) {
    document.getElementById('Об_играх')
        .scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('go-button').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
    document.querySelector('.minigames').scrollIntoView({ behavior: 'smooth' }); // Плавный скролл
});