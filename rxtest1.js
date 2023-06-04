const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
//const { range, filter, map } = require("rxjs");
const Rx = require('rxjs');
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { questions } = require("./lib/questions");



const prompts = new Rx.Subject();
inquirer.prompt(prompts);

// At some point in the future, push new questions
prompts.next(
    {
        type: 'input',
        message: 'What is their name?',
        name: 'name',
        prefix: 'NAME: ',
        // when: (data) => {
        //     if (data.role === 'Manager' || data.role === 'Engineer') {
        //         return true;
        //     }
        // },
        validate: (answer) => {
            if(!answer) {
                return "Please, answer the question!";
            }
            return true;
        },
        filter: (answer) => {
            if(answer) {
                answer = answer.trim();
                answer = answer.toLowerCase().split(' ')
                .map(function(answer) {; 
                    return answer.replace(answer[0], answer[0].toUpperCase());
                });
                return answer.join(' '); 
            }
        }
    },
    {
        type: 'input',
        message: 'What is their ID number?',
        name: 'id',
        prefix: 'ID: ',
        filter: (answer) => answer.trim(),
        validate: (answer) => {
            if(isNaN(parseInt(answer))) {
                return "Please, give a number!";
            }
            return true;
        }
    }
);
prompts.next(
    {
        type: 'input',
        message: 'What is their email address?',
        name: 'email',
        prefix: 'EMAIL: ',
        validate: (answer) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(answer)) {
            return "You have to provide a valid email address!"
            }
            return true
        }
    }
);

// When you're done
prompts.complete(
    console.log('FINISHED!')
);