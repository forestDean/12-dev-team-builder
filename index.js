const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const { range, filter, map } = require("rxjs");
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { questions } = require("./lib/questions");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
//const data = {role:'Manager'};

// TODO: Write Code to gather information about the development team members, and render the HTML file.
// function to write README file
// function writeToFile(data) {  
//     let markup = generateMarkdown(data);
//     fs.writeFile('generated--README.md', markup,
//        (err) =>
//          err ? console.error(chalk.red.bold(err)) : console.log(chalk.green.bold('\nSuccessfully written to generated--README.md'))
//         )
// }

// function to initialize program
    const init = () => {
        console.log(chalk.cyan.bold('\nWelcome to the TEAM generator\n'));
        console.log('Enter the required data for the', chalk.cyan.bold('TEAM MANAGER'),'...');
        askQuestions ();
        //data.role === 'Manager';
    }

    function askQuestions(answers.role) {    
        return inquirer
            .prompt(questions)
            .then(answers => {
                // if (data.options === 'Finish building the team') {
                // console.info(chalk.green.bold('ANSWERS: '), data)
                if (answers.options === 'Add an engineer') {
                    console.log(chalk.cyan.bold('\nENGINEER: '));
                    answers.role = 'Engineer';
                    return askQuestions ();
                } else if (answers.options === 'Add an intern') {
                    console.log(chalk.cyan.bold('\nINTERN: '));
                    answers.role = 'Intern';
                    return askQuestions ();
                } else {
                    console.log(chalk.green.bold('\nFINISHED!'));
                // writeToFile(data)
                }
            })
            .catch((error) => {
                if (error.isTtyError) {
                console.log(chalk.red.bold('Unable to render prompt in the current environment'));
                } else {
                console.log(chalk.red.bold('Unknown error'));
                }
            });
            
        };
    
// function call to initialize program
init();
