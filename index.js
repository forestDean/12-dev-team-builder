const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
import {questions} from './lib/questions.js'; //named import

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


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
        console.log(chalk.cyan.bold('\nWelcome to the README generator\n'));
        console.log('Please answer the following questions...');

    inquirer
        .prompt(questions)
        .then(data => 
          writeToFile(data)
        )
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
