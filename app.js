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
const outputPath1 = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// READ FILE ASYNC DEPENDENCY
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


/* Write code to use inquirer to gather information about the development employees,
 and to create objects for each employee (using the correct classes as blueprints!)*/
const teamMembers = [];

function newTeamMember(reply) {
    return inquirer
        .prompt([{
            type: "confirm",
            message: "Do you want to add another employee?",
            name: "continue",
        }, ])
        .then(function (userConfirm) {
            if (userConfirm.continue === true) {
                userPrompt();
                // Render HTML function here
            } else {
                console.log(teamMembers);
                combineFiles();
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

function userPrompt(response) {
    return inquirer
        .prompt([{
            type: "list",
            message: "What type of employee would you like to add?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"],
        }, ])
        .then(function (reply) {
            if (reply.role === "Manager") {
                inquirer
                    .prompt([{
                            type: "input",
                            message: "Enter employee's name:",
                            name: "name",
                        },
                        {
                            type: "input",
                            message: "Create employee's ID#:",
                            name: "id",
                        },
                        {
                            type: "input",
                            message: "Enter employee's e-mail address:",
                            name: "email",
                        },
                        {
                            type: "input",
                            message: "Enter the office manager's ID#?",
                            name: "officeNumber",
                        },
                    ])
                    .then(function (managerReply) {
                        let newManager = new Manager(
                            managerReply.name,
                            managerReply.id,
                            managerReply.email,
                            managerReply.officeNumber
                        );
                        teamMembers.push(newManager);
                        newTeamMember();
                    });
            } else if (reply.role === "Engineer") {
                inquirer
                    .prompt([{
                            type: "input",
                            message: "Enter employee's name:",
                            name: "name",
                        },
                        {
                            type: "input",
                            message: "Create employee's ID#:",
                            name: "id",
                        },
                        {
                            type: "input",
                            message: "Enter employee's e-mail address:",
                            name: "email",
                        },
                        {
                            type: "input",
                            message: "Enter employee's GitHub username:",
                            name: "github",
                        },
                    ])
                    .then(function (engineerReply) {
                        let newEngineer = new Engineer(
                            engineerReply.name,
                            engineerReply.id,
                            engineerReply.email,
                            engineerReply.github
                        );
                        teamMembers.push(newEngineer);
                        newTeamMember();
                    });
            } else if (reply.role === "Intern") {
                inquirer
                    .prompt([{
                            type: "input",
                            message: "Enter employee's name:",
                            name: "name",
                        },
                        {
                            type: "input",
                            message: "Create employee's ID#:",
                            name: "id",
                        },
                        {
                            type: "input",
                            message: "Enter employee's e-mail address:",
                            name: "email",
                        },
                        {
                            type: "input",
                            message: "Enter the intern's school name:",
                            name: "school",
                        },
                    ])
                    .then(function (internReply) {
                        let newIntern = new Intern(
                            internReply.name,
                            internReply.id,
                            internReply.email,
                            internReply.school
                        );
                        teamMembers.push(newIntern);
                        newTeamMember();
                    });
            }
        });
}
userPrompt();

// Function to read all files and write to render HTML.
function combineFiles() {
    let teamRender = render(teamMembers);
    //read each employee type file
    try {
        writeFileAsync(outputPath, teamRender);
    } catch (err) {
        console.log;
    }
}