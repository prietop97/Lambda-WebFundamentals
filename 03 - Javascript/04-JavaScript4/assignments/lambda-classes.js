// CODE here for your Lambda Classes

class Person {
    constructor(name,age,location){
        this.age = age;
        this.location = location;
        this.name = name;
    }
    speak(){
       return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
};


class Instructor extends Person {
    constructor(name,age,location,specialty,favLanguage,catchPhrase){
        super(name, age, location);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
    gradeModification(student, ){
        student.grade = Math.floor((student.grade * Math.random()));
        return student.grade;
    }
};

class Student extends Person {
    constructor(name,age,location,previousBackground,className,favSubjects,grade){
        super(name,age,location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.grade = grade;
    }
    listsSubjects(){
        return this.favSubjects.forEach(function(element) {
           console.log(element);
        });
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    graduate(){
        let needingPoints = 70 - this.grade;
        if(this.grade >= 70){
            return `CONGRATULATIONS YOU GRADUATED WITH ${this.grade}%`;
        }else{
            return `SORRY YOU CAN'T GRADUATE YET, INCREASE YOUR GRADE BY ${needingPoints}%`;
        }
    }
};

class ProjectManagers extends Instructor {
    constructor(name,age,location,specialty,favLanguage,catchPhrase, gradClassName, favInstructor){
        super(name,age,location,specialty,favLanguage,catchPhrase);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}`;
    }
    debugsCode(student,subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
};

let instructor1 = new Instructor("Josh",30,"Miami","Loops","Javascript","Hello All");
let student1 = new Student("Pedro",21,"Miami","Nothing here","Web24",["Javascript!","Python", "React"], 100);
let pm1 = new ProjectManagers("Mike",27,"New York","High array methods","Python","Good Morning you all", "Web24", "Brit");

// console.log(instructor1)
// console.log(instructor1.name);
// console.log(instructor1.demo("JAVA"));
// console.log(instructor1.grade(student1,"Javascript"));
// console.log(instructor1.speak());


// console.log(student1)
// console.log(student1.name);
// console.log(student1.PRAssignment("Javascript4"));
// console.log(student1.listsSubjects());
// console.log(student1.sprintChallenge("Front End"));


// console.log(pm1);
// console.log(pm1.name);
// console.log(pm1.standUp("Web 24 Lecture"));
// console.log(pm1.debugsCode(student1, "REACT FUNDEMENTALS"));
// console.log(pm1.speak());




////////////////////////////// STRETCH //////////////////////////
// console.log(student1.grade) /// PROBLEM1

console.log(instructor1.gradeModification(student1)); ///PROBLEM2
console.log(student1.grade); 
console.log(student1.graduate());









