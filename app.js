//DEPENDENCIES
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const util = require("util");
const jest = require("jest");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// READFILE ASYNC DEPENDENCY
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


/* Write code to use inquirer to gather information about the development team members,
 and to create objects for each team member (using the correct classes as blueprints!)*/
const teamMembers = [];

function newTeamMember(reply) {
    return inquirer
        .prompt([
            name: "name",
            message: "Enter the employee's name:",
            type: "input"
        }, {
            name: "id",
            message: "Enter the employee's ID:",
            type: "input"
        }, {
            name: "email",
            message: "Enter the employee's e-mail address:",
            type: "input",

        }, ];

    // Manager Questions:
    const managerSetQuestions = [{
        name: "officeNumber",
        message: "Enter the manager's office number:",
        type: "input",
    }, ];

    // Add the manager questions to concat with employee questions.
    const managerQuestions = employeeQuestions.concat(managerSetQuestions);

    // Add the engineer to the employee questions.
    const engineerSetQuestions = [{
        name: "githubUsername",
        message: "Enter engineer Github Username:",
        type: "input",
    }, ];

    // Add the engineer questions to concat with employee questions.
    engineerQuestions = employeeQuestions.concat(engineerSetQuestions);

    // Add the intern questions to the employee questions.
    const internSetQuestions = [{
        name: "school",
        message: "Enter the intern's school name:",
        type: "input"
    }, ];

    // Add the intern questions to concat with employee questions.
    internQuestions = employeeQuestions.concat(internSetQuestions);

    // Add employee questions
    const typeOfEmployeeQuestions = [{
        name: "addEmployee",
        message: "Choose a position for the new employee:",
        type: "list",
        choices: ["Manager", "Engineer", "Intern", "Don't add anymore employees"],
    }, ];

    async function init() {
        // Get questions & answers for manager
        const managerAnswers = await inquirer.prompt(managerQuestions);
        // Create a new manager object called groupManager
        const groupManager = new Manager(
            managerAnswers.name,
            managerAnswers.id,
            managerAnswers.email,
            managerAnswers.officeNumber
        );
        //render employeeArray
        employeeArray.push(groupManager);
        addMoreEmployees();
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
        const teamHTML = render(employeeArray);
        console.log(teamHTML);
        fs.writeFile(outputPath, teamHTML, (err) => {
            console.log(err);
        });
    }
    //run app.js
    init();