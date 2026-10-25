//1
function Phone(brand, model) {
  this.brand = brand;
  this.model = model;

  this.details = function () {
    console.log(`PHONE: ${brand}, ${model}`);
  };
}

const p = new Phone("samsung", "s26");
p.details();

//2
function Rectangle(width, height) {
  this.width = width;
  this.height = height;

  this.area = function () {
    console.log("AREA:", this.width * this.height);
  };
}

const r = new Rectangle(2, 5);
r.area();

//3
function BankAccount(owner, balance) {
  this.owner = owner;
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };

  this.withdraw = function (amount) {
    this.balance -= amount;
  };
  this.checkBalance = function () {
    console.log("your balance:", this.balance);
  };
}

const b = new BankAccount("noa", 35000);
b.deposit(25);
b.withdraw(3);
b.checkBalance();

//4

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} make a sound`);
};

function Dog(name) {
  this.name = name;

  Object.setPrototypeOf(Dog.prototype, Animal.prototype);
}

Dog.prototype.bark = function () {
  console.log(`${this.name} bark`);
};

const dog = new Dog("Rex");
dog.speak();
dog.bark();

//5

class Vehicle {
  constructor(type) {
    this.type = type;
  }

  describe() {
    console.log(`This is a ${this.type}`);
  }
}

class Car extends Vehicle {
  constructor(brand, type) {
    super(type);
    this.brand = brand;
  }

  info() {
    console.log(`This is a ${this.brand} ${this.type}`);
  }
}

const car = new Car("BMW", "car");
car.describe();
car.info();

//6
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  area(radius) {
    return Math.PI * radius ** 2;
  }
}

class Square extends Shape {
  area(side) {
    return side ** 2;
  }
}

const ci = new Circle();
console.log(ci.area(7));

const sq = new Square();
console.log(sq.area(5));

//7
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  info() {
    console.log(`Book: ${this.title}, by ${this.author}`);
  }
}

const bo = new Book("nnn", "noa");
bo.info();

//8

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`hello i'm ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, school) {
    super(name);
    this.school = school;
  }
  study() {
    console.log(`${this.name} studding at ${this.school}`);
  }
}

const st = new Student("noa", "etgar");
st.study();

//9

class Employee {
  #salary;
  constructor(salary) {
    this.salary = salary;
  }

  getSalary() {
    return this.#salary;
  }

  work(){
    console.log("employee is working")
  }
}

class Manager extends Employee{
  work(){
    console.log("manager is managing")
  }
}
 const ma=new Manager(30000)
 ma.work()