// TODO: Write code to define and export the Employee class
class Employee {
    constructor(role, name, email, id) {
        this.role = role;
        this.name = name;
        this.email = email;
        this.id = id;
    }
    //return the name
    getName() {
        return this.name;
    }
    //return the email
    getEmail() {
        return this.email;
    }
    //return the id
    getId() {
        return this.id;
    }
    //return the role
    getRole() {
        // return `${data.role}`;
    }
}

//create a new employeeName variable equal to new Employee = the user input data
let employeeName = new Employee(response.name);
console.log(employeeName.name);
let employeeEmail = new Employee(response.email);
let employeeId = new Employee(response.id);
employeeName.name();

module.exports = Employee;