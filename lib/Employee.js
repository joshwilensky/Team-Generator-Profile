class Employee {
    // Create constructor that takes name, id & email.
    constructor(name, id, email) {
        //set properties
        this.name = name;
        this.id = id;
        this.email = email;
        this.getName = function () {
            return this.name;
        };
        // Create methods to return info about the object.
        this.getId = function () {
            return this.id;
        };
        this.getEmail = function () {
            return this.email;
        };
        this.getRole = function () {
            return "Employee";
        };
    }
}

module.exports = Employee;