// CODE here for your Lambda Classes
class Person{
    constructor(Attrs){
        this.name = Attrs.name;
        this.age = Attrs.age;
        this.loc = Attrs.loc;
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.loc}`);
    }

}

class Instructor extends Person{
    constructor(Attrs){
        super(Attrs);
        this.spec = Attrs.spec;
        this.favLanguage = Attrs.favLanguage;
        this.catcPhrase = Attrs.catcPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }

}

class Student extends Person{
    constructor(Attrs){
        super(Attrs);
        this.previousBackground = Attrs.previousBackground;
        this.className = Attrs.className;
        this.favSubjects = Attrs.favSubjects;
    }

    listSubjects(){
        for(let i = 0; i < (this.favSubjects).length; i++){
            console.log(this.favSubjects[i]);
        }
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
        ;
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
        ;
    }

}

class ProjectManager extends Instructor{
    constructor(Attrs){
        super(Attrs);
        this.gradClassName = Attrs.gradClassName;
        this.favInstructor = Attrs.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel},@channel standy times!`);
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }

}

//create objects
darragh = new Student({
    name: 'Darragh',
    age: 22,
    loc: 'Donegal',
    previousBackground: 'kitchen porter',
    className: 'WEBUEU4',
    favSubjects: ['javascript', 'css', 'html']
});

alex = new Instructor({
    name: 'Alex',
    age: 28,
    loc: 'London',
    spec: 'Web Dev',
    favLanguage: 'javascript',
    catcPhrase: 'Any questions?'
});

tigran = new ProjectManager({
    name: 'Tigran',
    age: 26,
    loc: 'America',
    spec: 'Web Dev',
    favLanguage: 'javascript',
    catcPhrase: 'Nice'
})

//tests
darragh.speak();
darragh.listSubjects();
darragh.PRAssignment('Javascript IV');
darragh.sprintChallenge('Javascript Fundamentals');
console.log('*************************************');
alex.speak();
alex.demo('Javascript');
alex.grade(darragh, 'Javascript')
console.log('*************************************');
tigran.speak();
tigran.demo('Javascript');
tigran.grade(darragh, 'Javascript')
tigran.standUp('webeu4_tigran');
tigran.debugsCode(darragh, 'javascript');