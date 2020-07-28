// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee..
const Employee = require("./Employee.js");

// Create intern class extended from Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.getRole = function () {
            return "Intern";
        };
        this.getSchool = function () {
            return school;
        };
    }
}

module.exports = Intern;