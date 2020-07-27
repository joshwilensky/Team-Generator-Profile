// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee..
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id);
        //we need to att the school
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
}
//Export the modules
module.exports = Intern;