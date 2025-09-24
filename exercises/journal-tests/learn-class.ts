// * Core Concept of OOP
/* 

Learn Inheritance
(Pewarisan)

*/

class Person {
  name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;

    this.age = age;
  }

  introduce(): string {
    return `Hi, my name is ${this.name}`;
  }

  myAage(): string {
    return `My age is ${this.age}`;
  }
}

class Student extends Person {
  major: string;

  constructor(name: string, age: number, major: string) {
    super(name, age);
    this.major = major;
  }

  profile(): string {
    return `${this.name} is a student majoring in ${this.major}`;
  }

  graduation(): string {
    return `I will graduate in ${this.myAage()}`;
  }

  brithDay(str: string): void {
    this.name += " Sum with BrithDay " + str;
  }
}

const p = new Student("John", 28, "Computer Science");
p.brithDay("12-12-2022");
const result: string = p.introduce();

/* 


Abstraction

*/

abstract class AnimalBehaivior {
  abstract makeSound(): string;
}

class Animal extends AnimalBehaivior {
  name: string;
  sound: string;
  constructor(name: string, sound: string) {
    super();
    this.name = name;
    this.sound = sound;
  }

  makeSound(): string {
    return `${this.name} makes a sound is ${this.sound}`;
  }

  introduce(): string {
    return `${this.name} makes a sound is ${this.sound}`;
  }
}

const a1 = new Animal("Dog", "Bark");
const a2 = new Animal("Cat", "Meow");

class Vechile {
  constructor(private name: string, public sound: string) {
    console.log("Vechile constructor");
  }

  introduce(): string {
    return `${this.name} make a sound is ${this.sound}`;
  }
}

class Toyota extends Vechile {
  carName: string;
  price: string;
  constructor(n: string, sound: string) {
    console.log("Toyota constructor");
    super(n, sound);

    // super(name, sound);
    this.carName = n;
    this.price = "1000$";
  }

  howMuch(): string {
    return `This car is selled on ${this.price}`;
  }

  addBit(): void {
    const s = this.price.split("$")[0];
    const n = parseInt(s);
    const r = n * 2;
    this.price = `${r}$`;
  }

  test(): void {
    this.sound = "test";
  }
}

const vc = new Toyota("Name", "Vroom");

vc.test();

abstract class BankBehavior {
  abstract deposit(p: number): void;
}

class Bank extends BankBehavior {
  private balance: number = 5000;

  deposit(newBalance: number): void {
    this.balance += newBalance;
  }

  myBalance(): string {
    return `My balance is ${this.balance}`;
  }
}

const b = new Bank();
interface Flyable {
  fly(): void;
}

abstract class Bird {
  fly(): void {
    console.log("Fly From Bird");
  }

  fly2(): void {
    console.log("From Flyable 2 on Bird Abstract");
  }
  abstract sound(): void;
}

class Sparrow extends Bird implements Flyable {
  fly(): void {
    console.log("From Flayable");
  }
  sound(): void {
    console.log("From Sound");
  }
}

const s = new Sparrow();

class Children {
  constructor(public name: string) {}
}

class Child extends Children {
  constructor(public name: string, public age: number) {
    super(name);
  }
}

const child: Children = new Child("John", 12);

// const children:Child = new Children("John");

class Persons {
  constructor(public name: string) {}
}

class Students extends Persons {
  constructor(name: string, public major: string) {
    super(name);
  }
}

const ps: Persons = new Students("Alice", "CS");
// const ss: Students = new Persons("Bob"); // <---

class Counter {
  static counter: number = 0;
  value: number = 0;

  constructor() {
    Counter.counter++;
    this.value++;
  }
}

const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();
class Parent {
  protected secret = "hidden";
  private password = "private";

  myPassword(): string {
    return this.password;
  }
}

class Childs extends Parent {
  reveal() {
    return this.secret;
  }
}

const c = new Childs();

class User {
  name: string = "John";
  protected password: string = "password";
  private nik: number = 1234;
}

class Admin extends User {
  introduce(): string {
    return `Hi, my name is ${this.name}`;
  }
  myPassword(): string {
    return this.password;
  }
}

class SuperAdmin extends Admin {
  superPassword(): string {
    return this.password;
  }
}

const user = new User();
const admin = new Admin();

abstract class Shape {
  abstract area(): number;

  static describe(): void {
    console.log("I am a shape");
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

abstract class Vehicle {
  abstract wheels(): number;
  move() {
    console.log("Vehicle is moving with " + this.wheels() + " wheels");
  }
}

class Bike extends Vehicle {
  wheels() {
    return 2;
  }
}

class Truck extends Vehicle {
  wheels() {
    return 6;
  }
}

const v1: Vehicle = new Bike();
const v2: Vehicle = new Truck();

v1.move();
v2.move();

const fruit = "Banana";

function conditionFruit(fruit: string) {
  switch (fruit) {
    case "Banana":
      console.log("Banana");
      break;
    case "Apple":
      console.log("Apple");
      break;
    case "Pear":
      console.log("Pear");
      break;
    // TODO: Removed condriotn , CASE MUST BE RETURN String for their condtion not Bool
    /* 
    case fruit.includes("Pinneple"):
      console.log("Pear");
      break
    */
    default:
      console.log("Cannot found fruit u want");
  }
}

let i = 0;

if (require.main === module) {
  // console.log(user instanceof User); // true
  // console.log(user instanceof Admin); // false
  // console.log(admin instanceof User);
  // console.log(admin instanceof Admin);
  console.log(conditionFruit(fruit));
  do {
    console.log("Hello :", i + 1);
    i++;
  } while (i < 10);
}
