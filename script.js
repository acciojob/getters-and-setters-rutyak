class Person{
	constructor(name, age){
		this._name = name;
		this._age = age;
	}

	get name( ){
		return this._name 
	}

	set age(newAge){
		this._age = newAge;
	}
}

class Student extends Person{
	study(){
	    console.log(`${this._name} is studying`);
	}
}

class Teacher extends Person{
	teach(){
		console.log(`${this._name} is teaching`)
	}
}

const stu = new Student("Jon", 16);
console.log(stu.name);
stu.study();

const teach = new Teacher("Msr. Kumar", 29);
console.log(teach.name);
teach.teach();





// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;