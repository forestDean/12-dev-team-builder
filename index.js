const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { questions } = require("./lib/questions");
const { taskmenu } = require("./lib/questions");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");
const team = [];


// render the HTML file.
function writeToFile(team) { 
    console.log(chalk.green.bold('\n...writeToFile...')); ;

    fs.writeFile(outputPath, render(team),
       (err) =>
         err ? console.error(chalk.red.bold(err)) : console.log(chalk.green.bold('\nSuccessfully written to file'))
        )
}


// gather information about the development team members
function init () {
    console.log(chalk.cyan.bold('\nWelcome to the TEAM generator\n'));
    console.log('Enter the required data for the', chalk.cyan.bold('TEAM MANAGER'),'...');
    askQuestions(); 
}
    const askQuestions = (taskRole) => { ;
        const defineRole = { role: taskRole };
        // console.info(defineRole);

        return inquirer
            .prompt(questions, defineRole)
            .then(answers => {
                // console.log('Role: ' + answers.role);
                switch (answers.role) {
                    case undefined:
                        const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
                        team.push(manager);
                        break;
                    case 'Engineer':
                        const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
                        team.push(engineer);
                        break;
                    case 'Intern':
                        const intern = new Intern (answers.name, answers.id, answers.email, answers.school);
                        team.push(intern);
                        break;
                    default:
                        console.log(chalk.red.bold('Switch error'));
                }

                console.info(team);
                taskMenu();
            })
            .catch((error) => {
                if (error.isTtyError) {
                console.log(chalk.red.bold('Unable to render prompt in the current environment'));
                } else {
                console.log(chalk.red.bold('Unknown error'));
                }
            });  
        };


// Task selection menu
const taskMenu = () => {
    inquirer
        .prompt(taskmenu)
        .then(answer => {

            const task = Object.values(answer);
            if (task == 'Finish building the team') {
                // console.log(chalk.green.bold("...building!"));
                writeToFile(team);
            } else if (task == 'Add an engineer') {
                askQuestions ('Engineer'); 
            } else if (task == 'Add an intern') {
                askQuestions ('Intern');        
            } else {
                console.log(chalk.red.bold('Task Menu error'));
            }

            // *********************** FIX THIS ***********************
            // switch (task) {
            //     case 'Finish building the team' :
            //         console.log(chalk.green.bold("...building!"));
            //         writeToFile(team);
            //         break;
            //     case 'Add an engineer' :
            //         askQuestions ('Engineer'); 
            //         break;
            //     case 'Add an intern' :
            //         askQuestions ('Intern'); 
            //         break;
            //     default:
            //         console.log(chalk.red.bold('Task Menu error'));
            // }

            })
            .catch((error) => {
                if (error.isTtyError) {
                console.log(chalk.red.bold('Unable to render prompt in the current environment'));
                } else {
                console.log(chalk.red.bold('Unknown error'));
                }
            
            })
} 
    
// function call to initialize program
init();
