//============== ДЗ ============\\
/*
function Car(model, motor, price, year) {
   let _model = model;
   let _motor = motor;
   let _price = price;
   let _year = year;
   this.dislpay = function () {
      console.log(`${_model}: Мотор: ${_motor}, Цена:${_price} $, Год:${_year}`);
   }
}

function CalculatorCar(sumFund, sumExcise = 0, sumToll = 0, sumTax = 0, result = 0, all = 0) {
   let _sumFund = sumFund;
   let _sumExcise = sumExcise;
   let _sumToll = sumToll;
   let _sumTax = sumTax;
   let _result = result;
   let _all = all;
   this.getPensionFund = function (cars) {
      if (cars._price <= 12500) {
         _sumFund = cars._price * 0.03;
         return `Пенсійний фонд: ${Math.round(_sumFund)}$`;
      } else if (12500 >= cars._price || cars._price <= 22000) {
         _sumFund = cars._price * 0.04;
         return `Пенсійний фонд: ${Math.round(_sumFund)}$`;
      } else if (cars._price >= 22000) {
         _sumFund = cars._price * 0.05
         return `Пенсійний фонд: ${Math.round(_sumFund)}$`;
      } else {
         return `error`;
      }
   };
   getExcise = (cars) => {
      if (cars._motor <= 3.0) {
         _sumExcise = 50 * cars._motor * (2021 - cars._year);
         return `Акциз: ${Math.round(_sumExcise)}$`;
      } else if (cars._motor >= 3.0) {
         _sumExcise = 100 * cars._motor * (2021 - cars._year);
         return `Акциз: ${Math.round(_sumExcise)}$`;
      } else {
         return `error`;
      }
   };
   getToll = (cars) => {
      _sumToll = cars._price * 0.1;
      return `Мито: ${Math.round(_sumToll)}$`;
   };
   getTax = (cars) => {
      _sumTax = cars._price + _sumExcise + _sumToll;
      _sumTax *= 0.2;
      return `ПДВ: ${Math.round(_sumTax)}$`;
   };

   getPriceCar = () => {
      _result = _sumExcise + _sumToll + _sumTax + _sumFund;
      return `Сума розтаможки авто: ${Math.round(_result)}$`;
   };

   getAll = (cars) => {
      s = getPensionFund(car)
      _all = cars._price + _result;
      return `Цена авто с розтаможкою: ${Math.round(_all)}$`;
   };
}

let cars = [];

let calculator = new CalculatorCar();

let nameModel;

console.log("1 - Добавить авто ");
console.log("2 - Посмотреть список авто");
console.log("3 - Посчитать расстаможку");
console.log("  1) - Выбор авто по модели");
console.log("4 - Посчитать расстаможку всех авто");
console.log("5 - Выйти");
let exit = false;
while (!exit) {
   let menu = +prompt("Enter");
   switch (menu) {
      case 1: {
         cars[cars.length] = new Car(prompt("модель автомобиля:"), parseFloat(prompt("Об'єм двигуна в см3:")), +prompt("цена автомобиля:"), +prompt("Год автомобиля:"));
         break;
      }
      case 2: {
         for (item of cars) {
            item.dislpay();
         }
         break;
      }
      case 3: {
         nameModel = prompt("ведите модель автомобиля:");
         for (arr of cars) {
            if (arr._model === nameModel) {
               console.log(calculator.getPensionFund(arr));
            }
         }
         break;
      }
      case 4: {
         for (key of cars) {
            console.log(calculator.getPensionFund(key));
         }
         break;
      }
      case 5: {
         exit = true;
         console.log("вы вышли")
         break;
      }
   }
}
*/
/*
let sum = new Function('n1', 'n2',
   'return n1+n2');

console.log(sum(5, 8))
let square = new Function('x1',
   'return x1**2');
console.log(square(2))

Function.prototype.hello = "hello";
console.log(sum.hello)

call() apply()
*/

/*
function sum(x1, x2) {
   return x1 + x2;
}

let res = sum.call(this, 3, 7)
console.log(res);
*/

/*
function User(name, age) {
   this.name = name;
   this.age = age;
}

let tom = new User("tom", 15);
let timur = new User("timur", 15);


function info() {
   console.log("Ваше имя:" + this.name)
}

info.call(timur);
*/

/*
function sum(x1, x2) {
   return x1 + x2;
}

let res = sum.apply(this, [5, 2])
console.log(res);
*/

/*
function Car(model, color, speed = 0) {
   this.model = model;
   this.color = color;
   this.speed = speed;
}

let audi = new Car('q4', 'red', 231)
function display(speed) {
   console.log(this.model, this.color, this.speed);
}

display.call(audi);
*/

/*
function Human(name, age, eyes) {
   this.name = name;
   this.age = age;
   this.eyes = eyes;
   this.go = function () {
      console.log(this.name + "start go");
   }
   this.work = function () {
      console.log(this.name + " worked")
   }
   this.learn = function () {
      console.log(this.name + " learn")
   }
}

function Student(name, age, univer) {
   Human.call(this, name, age, eyes = 3);
   this.univer = univer;
   this.work = function () {
      console.log("error" + this.name + " learn")
   }
}

function Employee(name, age, work) {
   Human.call(this, name, age, work);
   this.work = work;
}

let anton = new Human("anton", 12);
let kiril_student = new Student("kirill", 16, "Metal");

console.log(anton);
console.log(kiril_student);

anton.go();
kiril_student.work();
*/


//Animal, dog, riba, popygai
/*
function Animal(eyes, animalName, age) {
   this.eyes = eyes;
   this.animalName = animalName;
   this.age = age;
   this.dev = "";
   this.go = function () {
      console.log(this.animalName + " может" + this.dev)
   }
}

function Dog(eyes, animalName, age) {
   Animal.call(this, eyes, animalName, age);
   this.dev = "бежать"
}

function Fish(eyes, animalName, age) {
   Animal.coll(this, eyes, animalName, age);
   this.dev = "плыть";
}

function Popygai(eyes, animalName, age) {
   Animal.coll(this, eyes, animalName, age);
   this.dev = "летать";
}

let dog = new Dog(2, "sabaka", 13);
dog.go();
*/

//======== ДЗ ========\\
/*
function Car(model, speed) {
   this.model = model;
   this.speed = speed;
   this.display = function () {
      console.log(`Модель: ${this.model}, Скорость: ${this.speed} км/год`)
   }
}

function Calculator(meter = 0,) {
   this.meters = meter;
   result = (this.speed / 10) * 3;
   resultOne = (this.speed / 10) * (this.speed / 10);
   this.meters += result + resultOne;
   console.log(`Модель: ${this.model}, Тормозной путь составляет: ${Math.round(this.meters)} м`);
}

function Audi(model, speed) {
   Car.call(this, model, speed);
}

let audi = new Audi("Audi", 120);
audi.display();
Calculator.call(audi);

function Mercedes(model, speed) {
   Car.call(this, model, speed)
}

let mercedes = new Mercedes("Mercedes", 145);
mercedes.display();
Calculator.call(mercedes);

function Porsche(model, speed) {
   Car.apply(this, [model, speed]);
}

let porsche = new Porsche("Porsche", 82);
porsche.display();
Calculator.call(porsche);
*/

/*
'use strict'
function foo() {
   var x = "x";
   console.log(this.x);
}

var x = 'x15';
foo();
*/

/*
let person = {
   age: 15,
   foo: function () {
      console.log(this.age);
   }
}

var age = 20;
person.foo();
*/


// Деструктуризация

/*
const user = {
   name: "egor",
   age: 24,
   email: "mail.ru",
   phone: "+380660570253"
}


let { name, age, ...contacts } = user;
console.log(name, age, contacts);
*/

/*
let users = ["egor", "kirill", "toma"];

let [e, k, t] = users;
console.log(e);
*/

/*
let users = [];
let idx;
for (let i = 0; i < 4; i++) {
   users[i] = prompt();
   if (users[i] == "Киррил") {
      idx = i;
   }
}

let us = [];
let j = 0;
// Антон Маша Киррил Вася
for (let i = idx; i < users.length; i++) {
   us[j] = users[i];
   j++;
}

console.log(users);
console.log(us);

//{Антон Маша} / {Киррил Вася}
*/

/*
let x = 5;
let y = 3;

console.log(x);
console.log(y);

[x, y] = [y, x]


console.log(x);
console.log(y);
*/

/*
let people = [
   { name: "Tom", age: 34 },
   { name: "Bob", age: 23 },
   { name: "Sam", age: 32 }
];

let [{ name }] = people;
console.log(name)
*/

//=========== ДЗ =========\\

