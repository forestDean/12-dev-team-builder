const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { questions } = require("./lib/questions");
const { taskmenu } = require("./lib/questions");
//const { team } = require("./src/page-template");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const team = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// function to render the HTML file.
function writeToFile(team) { 
    console.log(chalk.green.bold('\n...writeToFile...')); 
    //console.log(answers);
    console.log(outputPath);
    //console.log(manager.email);

    //let markup = team(answers); // unknown error
    //let markup = render(answers);

    fs.writeFile(outputPath, render(team),
    //fs.writeFile(render, answers,
       (err) =>
         err ? console.error(chalk.red.bold(err)) : console.log(chalk.green.bold('\nSuccessfully written to file'))
        )
}

// Code to gather information about the development team members
function init () {
    console.log(chalk.cyan.bold('\nWelcome to the TEAM generator\n'));
    console.log('Enter the required data for the', chalk.cyan.bold('TEAM MANAGER'),'...');

    const askQuestions = () => { 
        return inquirer
            .prompt(questions)
            .then(answers => {
                console.log('Role: ' + answers.role);
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
                // console.info(chalk.green.bold('ANSWERS: '), answers);
                // console.info(team);
                // console.log(answers.role);
                // writeToFile(team);
            })
            // .then(
            //     inquirer.prompt(taskmenu)
            // )
            .catch((error) => {
                if (error.isTtyError) {
                console.log(chalk.red.bold('Unable to render prompt in the current environment'));
                } else {
                console.log(chalk.red.bold('Unknown error'));
                }
            });

            
            
        };
        askQuestions();   
}

const taskMenu = () => {
    inquirer
    .prompt(taskmenu)
    .then(answer => {
        console.log('TASK: ' + Object.values(answer));;

        const task = Object.values(answer);
        if (task == 'Finish building the team') {
            console.log(chalk.green.bold("...building!"));
            writeToFile(team);
        } else if (task == 'Add an engineer') {
            console.log(chalk.green.bold("...adding an engineer!"));
            answers.role = 'Engineer';
            askQuestions (); 
        } else if (task == 'Add an intern') {
            console.log(chalk.green.bold("...adding an intern!"));        
            answers.role = 'Intern';
            askQuestions ();        
        } else {
            console.log(chalk.red.bold('Task Menu error'));
        }

        // switch (task) {
        //     case 'Finish building the team' :
        //         console.log(chalk.green.bold("...building!"));
        //         writeToFile(team);
        //         break;
        //     case 'Add an engineer' :
        //         answers.role = 'Engineer';
        //         askQuestions (); 
        //         break;
        //     case 'Add an intern' :
        //         answers.role = 'Intern';
        //         askQuestions (); 
        //         break;
        //     default:
        //         console.log(chalk.red.bold('Task Menu error'));
        // }
    });
} 
    
// function call to initialize program
init();
