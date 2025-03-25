// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 console.log(people.sort((a, b) => a.age - b.age));

// Задание 2
const isPositive = (num) => num > 0;

const isMale = (person) => person.gender === 'male';

const filter = (arr, ruleFunction) => {
  const result = [];
  
  arr.forEach((item) => {
    if (ruleFunction(item)) {
      result.push(item);
    }
  });
  
  return result;
};

console.log(filter([3, -4, 1, 9], isPositive));

const persons = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(persons, isMale));

// Задание 3
const dateInterval = setInterval(() => {
    console.log(new Date().toString());
  }, 3000);
  
  setTimeout(() => {
    clearInterval(dateInterval);
    console.log('30 секунд прошло');
  }, 30000);

// Задание 4
function delayForSecond(callback) {
    setTimeout(() => callback(), 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));