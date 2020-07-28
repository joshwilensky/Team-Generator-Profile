// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

// Create engineer class extended from Employee class.
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.getRole = function () {
            return "Engineer";
        };
        this.getGithub = function () {
            return github;
        };
    }
}

module.exports = Engineer;