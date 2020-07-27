const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const jest = require("jest");
var phoneFormatter = require("phone-formatter");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeArray = new Array();

/* Write code to use inquirer to gather information about the development team members,
 and to create objects for each team member (using the correct classes as blueprints!)*/
const employeeQuestions = [];
var inquirer = require("inquirer");
inquirer.prompt([
  { name: "name", message: "Enter the employee's name:", type: "input" },
  { name: "id", message: "Enter the employee's ID:", type: "input" },
  {
    name: "email",
    message: "Enter the employee's e-mail:",
    type: "input",
    validate: function (email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
  },
]);

// Manager Questions:
const manager = [
  {
    name: "officeNumber",
    message: "Enter the manager's office phone #:",
    type: "input",
  },
  phoneFormatter.format("2125551212", "(NNN) NNN-NNNN"),
];

// Added the manager questions to the employee questions
const managerQuestion = employee.concat(manager);

// Added the engineer to the employee questions.

const engineer = [
  {
    name: "gitHub",
    message: "Enter the engineer's GitHub username:",
    type: "input",
  },
];

// Add the engineer questions to the employee questions.
const engineerQuestion = employee.concat(engineer);

// Add the intern questions to the employee questions.
const intern = [
  { name: "school", message: "Enter the intern's school name:", type: "input" },
];

const internQuestion = employee.concat(intern);

// Add employee questions.
const employeeQuestions = [
  {
    name: "addEmployee",
    message: "Choose which position for the new employee:",
    type: "list",
    choices: ["Manager", "Engineer", "Intern", "Stop Adding More Employees"],
  },
];
// After the user has input all employees desired info, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
