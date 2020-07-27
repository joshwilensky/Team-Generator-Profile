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
    choices: ["Manager", "Engineer", "Intern", "Don't add anymore employees"],
  },
];

async function init() {
  // Get questions and answers for manager.
  const managerAnswers = await inquirer.prompt(manager);
  const addManager = new Manager(
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.officeNumber
  );
  employeeArray.push(addManager);
  addMoreEmployees();
}

// Render employeeArray.
async function addMoreEmployees() {
  let addMore = await inquirer.prompt(employeeQuestions);
  switch (addMore.addEmployee) {
    case "Engineer":
      const engineerAnswers = await inquirer.prompt(engineerQuestions);
      const newEngineer = new Engineer(
        engineerAnswers.name,
        engineerAnswers.id,
        engineerAnswers.email,
        engineerAnswers.githubUsername
      );
      employeeArray.push(newEngineer);
      addMoreEmployees();
      break;
    case "Intern":
      const internAnswers = await inquirer.prompt(internQuestions);
      const newIntern = new Intern(
        internAnswers.name,
        internAnswers.id,
        internAnswers.email,
        internAnswers.school
      );
      employeeArray.push(newIntern);
      addMoreEmployees();
      break;

    case "Stop Adding More Employees":
      console.log(employeeArray);
      callRender();
      break;
    default:
      console.log("No switch was found");
      console.log(addMore[0]);
      break;
  }
}

function callRender() {
  const newHTML = render(employeeArray);
  console.log(newHTML);
  fs.writeFile(outputPath, newHTML, (err) => {
    console.log(err);
  });
}
//run app.js
init();
