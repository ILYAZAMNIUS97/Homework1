document.getElementById('go-button').addEventListener('click', function (event) {
    document.getElementById('Об_играх')
        .scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('go-button').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы
    document.querySelector('.minigames').scrollIntoView({ behavior: 'smooth' }); // Плавный скролл
});

//task1
let a = 10;
alert(a);
a = 20;
alert(a);

//task2
let firstIPhoneYear = 2007;
alert(firstIPhoneYear);

//task3
let creatorName = "Brendan Eich";
alert(creatorName);

//task4
let number1 = 10;
let number2 = 2;
alert(number1 + number2);
alert(number1 - number2);
alert(number1 * number2);
alert(number1 / number2);

//task5
let result = Math.pow(2, 5);
alert(result);

//task6
let numberA = 9;
let numberB = 2;
alert(numberA % numberB);

//task7
let number = 1;
number += 5;
number -= 3;
number *= 7;
number /= 3;
alert(number);

//task8
let age = prompt("Сколько вам лет?");
alert(age);

//task9
let user = {
    name: "Иван",
    age: 25,
    isAdmin: true
};

//task10
let userName = prompt("Как вас зовут?");
alert(`Привет, ${userName}!`);