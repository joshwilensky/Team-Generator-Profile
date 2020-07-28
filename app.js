// DEPENDENCIES =================================
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const jest = require("jest");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeArray = new Array();

/* Write code to use inquirer to gather information about the development team members,
 and to create objects for each team member (using the correct classes as blueprints!)*/

const employeeQuestions = [{
        name: "name",
        message: "Enter the employee's name:",
        type: "input"
    },
    {
        name: "id",
        message: "Enter the employee's ID:",
        type: "input"
    },
    {
        name: "email",
        message: "Enter the employee's e-mail address:",
        type: "input",

    },
];

// Manager Questions:
const managerSetQuestions = [{
    name: "officeNumber",
    message: "Enter the manager's office number:",
    type: "input",
}, ];
// Added the manager questions to the employee questions
const managerQuestions = employeeQuestions.concat(managerSetQuestions);

// Added the engineer to the employee questions.
const engineerSetQuestions = [{
    name: "githubUsername",
    message: "Enter engineer Github Username:",
    type: "input",
}, ];

// Add the engineer questions to the employee questions.
engineerQuestions = employeeQuestions.concat(engineerSetQuestions);

// Add the intern questions to the employee questions.
const internSetQuestions = [{
    name: "school",
    message: "Enter the intern's school name:",
    type: "input"
}, ];

internQuestions = employeeQuestions.concat(internSetQuestions);

// Add employee questions.
const typeOfEmployeeQuestions = [{
    name: "addEmployee",
    message: "Choose a position for the new employee:",
    type: "list",
    choices: ["Manager", "Engineer", "Intern", "Don't add anymore employees"],
}, ];

async function init() {
    // Get questions & answers for manager
    const managerAnswers = await inquirer.prompt(managerQuestions);
    //create a new manager object called groupManager
    const groupManager = new Manager(
        managerAnswers.name,
        managerAnswers.id,
        managerAnswers.email,
        managerAnswers.officeNumber
    );
    employeeArray.push(groupManager);
    addMoreEmployees();

    //render employeeArray
}

async function addMoreEmployees() {
    let addMore = await inquirer.prompt(typeOfEmployeeQuestions);

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
        case "Don't add more employees!":
            console.log(employeeArray);
            callRender();
            break;
        default:
            console.log("You're done!");
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