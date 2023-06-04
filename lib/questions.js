// array of questions for user
const questions = [

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
},
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
},
{
    type: 'input',
    message: 'What is their office number?',
    name: 'officeNumber',
    prefix: 'OFFICE NO: ',
    when: (data) => {
        if (!data.role) {
            return true;
        }
    },
    filter: (answer) => answer.trim(),
    validate: (answer) => {
        if(isNaN(parseInt(answer))) {
            return "Please, give a number!";
        }
        return true;
    }
},
{
    type: 'list',
    message: 'What would you like to do...?',
    name: 'options',
    prefix: '\nOPTIONS: ',
    choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
    loop: false,
    pageSize: 3,
    validate: (answer) => {
        if(answer === 'Finish building the team') {
            console.log(chalk.green.bold("...building!"));
        }else if (answer === 'Add an engineer'){
            data.role = 'Engineer';
        }
        return true;
    }
 },
{
    type: 'input',
    message: 'What is their GitHub username?',
    name: 'github',
    prefix: 'GITHUB: ',
    when: (data) => {
        if (data.role === 'Engineer') {
            return true;
        }
    },
    filter: (answer) => answer.trim()
},
{
    type: 'input',
    message: 'Where were they educated?',
    name: 'school',
    prefix: 'EDUCATION: ',
    when: (data) => {
        if (data.role === 'Intern') {
            return true;
        }
    },
    filter: (answer) => answer.trim()
},
];

// {
//     type: 'list',
//     message: 'What is their company role?',
//     name: 'role',
//     prefix: 'ROLE: ',
//     choices: ['Manager', 'Engineer', 'Intern'],
//     loop: false,
//     pageSize: 3,
//  },


module.exports = {
    questions
  };