// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

//Create manager class extended from employee class.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.getRole = function () {
            return "Manager";
        };
        this.getOfficeNumber = function () {
            return officeNumber;
        };
    }
}

module.exports = Manager;