//============== ДЗ ============\\

function Car(model, motor, price, year) {
   let _model = model;
   let _motor = motor;
   let _price = price;
   let _year = year;
   this.dislpay = function () {
      console.log(`${_model}: Мотор: ${_motor}, Цена:${_price} $, Год:${_year}`);
   };
   this.getPensionFund = () => {
      if (_price <= 12500) {
         _sumFund = _price * 0.03;
         console.log(`Пенсійний фонд: ${Math.round(_sumFund)}$`);
      } else if (12500 >= _price || _price <= 22000) {
         _sumFund = _price * 0.04;
         console.log(`Пенсійний фонд: ${Math.round(_sumFund)}$`);
      } else if (_price >= 22000) {
         _sumFund = _price * 0.05
         console.log(`Пенсійний фонд: ${Math.round(_sumFund)}$`);
      } else {
         console.log("error");
      }
   };
   this.getExcise = () => {
      if (_motor <= 3.0) {
         _sumExcise = 50 * _motor * (2021 - _year);
         console.log(`Акциз: ${Math.round(_sumExcise)}$`);
      } else if (_motor >= 3.0) {
         _sumExcise = 100 * _motor * (2021 - _year);
         console.log(`Акциз: ${Math.round(_sumExcise)}$`);
      } else {
         console.log("error");
      }
   };
   this.getToll = () => {
      _sumToll = _price * 0.1;
      console.log(`Мито: ${Math.round(_sumToll)}$`)
   };
   this.getTax = () => {
      _sumTax = _price + _sumExcise + _sumToll;
      _sumTax *= 0.2;
      console.log(`ПДВ: ${Math.round(_sumTax)}$`);
   };

   this.getPriceCar = () => {
      _result = _sumExcise + _sumToll + _sumTax + _sumFund;
      console.log(`Сума розтаможки авто: ${Math.round(_result)}$`);
   };

   this.getAll = () => {
      _all = _price + _result;
      console.log(`Цена авто с розтаможкою: ${Math.round(_all)}$`);
   };
}

Car.prototype._sumFund = 0;
Car.prototype._sumExcise = 0;
Car.prototype._sumToll = 0;
Car.prototype._sumTax = 0;
Car.prototype._result = 0;
Car.prototype._all = 0;

let car;

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
         car = new Car(prompt("модель автомобиля:"), parseFloat(prompt("Об'єм двигуна в см3:")), +prompt("цена автомобиля:"), +prompt("Год автомобиля:"));
         break;
      }
      case 2: {
         car.dislpay();
         break;
      }
      case 3: {
         car.getPensionFund();
         car.getExcise();
         car.getToll();
         car.getTax();
         car.getPriceCar();
         car.getAll();
         break;
      }
      case 4: {
         break;
      }
      case 5: {
         exit = true;
         console.log("вы вышли")
         break;
      }
   }
}
