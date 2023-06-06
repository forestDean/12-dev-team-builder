// array of questions for user
const questions = [
// {
//     type: 'list',
//     message: 'Confirm the role to add.',
//     name: 'role',
//     prefix: 'ROLE: ',
//     choices: ['Engineer', 'Intern'],
//     loop: false,
//     pageSize: 2,
//     when: (answers) => {
//         if (answers.role === 'Engineer') {
//             return true;
//         }
//     }
// },
{
    type: 'input',
    message: 'What is their name?',
    name: 'name',
    prefix: 'NAME: ',
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
    when: (answers) => {
        if (!answers.role) {
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
    type: 'input',
    message: 'What is their GitHub username?',
    name: 'github',
    prefix: 'GITHUB: ',
    when: (answers) => {
        if (answers.role === 'Engineer') {
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
    when: (answers) => {
        if (answers.role === 'Intern') {
            return true;
        }
    },
    filter: (answer) => answer.trim()
}
];


const taskmenu = [
    {
        type: 'list',
        message: 'What would you like to do...?',
        name: 'options',
        prefix: '\nOPTIONS: ',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
        loop: false,
        pageSize: 3,
    }
];


module.exports = {
    questions,
    taskmenu
  };