//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	get name(){
		return this._name;
	}
	set age(){
		this._age = age;
	}
}

class Student extends Person {
	study(){
		console.log(`${name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${name} is teaching`);class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

let teach = new Teacher("John Doe", 35);
let stu = new Student("Jane Smith", 22);
stu.age = 23;

console.log(stu.name); // Output: Jane Smith
stu.study(); // Output: Jane Smith is studying
teach.teach(); // Output: John Doe is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

	}

}

let teach = new Teacher();
let stu = new Student();
stu.age = "22";
console.log(stu.name);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
