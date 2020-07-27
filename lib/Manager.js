// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email, id) {
        super(name, email, id);
        //we need to att the school
        this.school = school;
    }
    getOfficeNumber() {
        return "Manager";
    }
}
//Export the modules
module.exports = Intern;