class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  get name() {
    return this._name;
  }
  
  set name(value) {
    this._name = value;
  }
  
  get age() {
    return this._age;
  }
  
  set age(value) {
    this._age = value;
  }
  
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying.`);
  }
}

class Teacher extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }
  
  teach() {
    console.log(`${this.name} is teaching.`);
  }
  
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
