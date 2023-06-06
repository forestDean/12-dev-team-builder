const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { questions } = require("./lib/questions");
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
        //askQuestions ();
    
        const askQuestions = () => { 
            //if (answers) {console.log(chalk.red.bold(answers.email));}  
            return inquirer
                .prompt(questions)
                .then(answers => {
                    console.info(chalk.green.bold('ANSWERS: '), answers)
                    //const manager = new Manager (name, id, email, officeNumber);
                    const manager = new Manager (answers);
                    team.push(manager);

                    //return team; //for test
                    writeToFile(team);

                    // if (answers.options === 'Add an engineer') {
                    //     console.log(chalk.cyan.bold('\nENGINEER: '));
                    //     askQuestions ('Engineer');
                    // } else if (answers.options === 'Add an intern') {
                    //     console.log(chalk.cyan.bold('\nINTERN: '));
                    //     answers.role = 'Intern';
                    //     askQuestions ();
                    // } else {
                    //     console.log(chalk.green.bold('\nFINISHED!'));
                    //     writeToFile(answers);
                    // }
                })
                .catch((error) => {
                    if (error.isTtyError) {
                    console.log(chalk.red.bold('Unable to render prompt in the current environment'));
                    } else {
                    console.log(chalk.red.bold('Unknown error'));
                    }
                });
                
            };
         askQuestions ();   
    }
    
// function call to initialize program
init();
