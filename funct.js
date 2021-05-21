var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var color;
(function (color) {
    color[color["Red"] = 7] = "Red";
    color[color["Green"] = 8] = "Green";
    color[color["Blue"] = 9] = "Blue";
})(color || (color = {}));
var c = color.Green;
console.log(c);
var randomValue = 10;
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
var b = 56;
b.toString;
var multiType;
multiType = 45;
multiType = true;
var anyType;
anyType = 35;
anyType = false;
anyType = 'Hello';
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
function loginDetails(signUp) {
    console.log(signUp.firstName + "\n    " + signUp.lastName + "\n    " + signUp.logInName + "\n    " + signUp.email + "\n    " + signUp.password + "\n    " + signUp.reEnterPassword + "\n    " + signUp.securityQuestion + "\n    " + signUp.selectCountry + "\n    " + signUp.phoneNumber + "\n    " + signUp.address + "\n    " + signUp.postalCode);
}
var login = {
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
};
loginDetails(login);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet1 = function () {
        console.log("Good morning " + this.employeeName + "!");
    };
    Employee.prototype.greet2 = function () {
        console.log(this.employeeName + " is a new employee here");
    };
    return Employee;
}());
var emp1 = new Employee('James');
console.log(emp1.employeeName);
emp1.greet1();
emp1.greet2();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var manager = new Manager('Mr. Bolts');
manager.delegateWork();
manager.greet1();
console.log(manager.employeeName);
console.log("Manager " + manager.employeeName + " delegated tasks to " + emp1.employeeName);
