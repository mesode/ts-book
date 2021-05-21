enum color {Red = 7, Green, Blue}

let c: color = color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
// randomValue = "Vishwas";

console.log(randomValue);

// let myVariable: unknown = 10;

// function hasName(obj: any): obj is {name: string}{
//     return !!obj &&
//         typeof obj === "object" && 
//         "name" in obj
// }

// if(hasName(myVariable)){
//     console.log(myVariable.name);
// }

// (myVariable as string).toUpperCase();

let b = 56;
b.toString;

let multiType: number | boolean;
multiType = 45;
multiType = true;


let anyType: any;
anyType = 35;
anyType = false;
anyType = 'Hello';

function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};

fullName(p);

interface SignUp{
    firstName: string;
    lastName: string;
    logInName: string;
    email: string;
    password: string;
    reEnterPassword: string;
    securityQuestion: string;
    selectCountry: string;
    phoneNumber: number;
    address?: string;
    postalCode?: number;
}

function loginDetails(signUp: SignUp){
    console.log(`${signUp.firstName}
    ${signUp.lastName}
    ${signUp.logInName}
    ${signUp.email}
    ${signUp.password}
    ${signUp.reEnterPassword}
    ${signUp.securityQuestion}
    ${signUp.selectCountry}
    ${signUp.phoneNumber}
    ${signUp.address}
    ${signUp.postalCode}`)
}

let login = {
    firstName: 'Lamba', 
    lastName: 'Joe', 
    logInName: 'LaJo', 
    email: 'lambajoe@gmail.com',
    password: 'lambjoe2000',
    reEnterPassword: 'lambjoe2000',
    securityQuestion: 'What is the name of the hospital you were born in?',
    selectCountry: 'Cameroon',
    phoneNumber: 674399990,
    address: 'Buea',
    postalCode: 12345
}

loginDetails(login);

class Employee{
    employeeName: string;
    constructor(name: string){
        this.employeeName = name;
    }
    greet1(){
        console.log(`Good morning ${this.employeeName}!`);
    }
    greet2(){
        console.log(`${this.employeeName} is a new employee here`);
    }
}

let emp1 = new Employee('James');
console.log(emp1.employeeName);
emp1.greet1();
emp1.greet2();

class Manager extends Employee{
    managerName: string;
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log(`Manager delegating tasks`);
    }
}

let manager = new Manager('Mr. Bolts');
manager.delegateWork();
manager.greet1();
console.log(manager.employeeName);

console.log(`Manager ${manager.employeeName} delegated tasks to ${emp1.employeeName}`)