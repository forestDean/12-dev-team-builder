// array of questions for user
//export const questions = [

{
    type: 'input',
    message: 'What is your name?',
    name: 'title',
    prefix: 'TITLE: ',
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
    type: 'list',
    message: 'Choose your license from the menu.',
    name: 'licence',
    prefix: 'LICENCE: ',
    default: 'MIT',
    choices: licence,
    loop: false,
    pageSize: 14,
 },
{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
    prefix: 'QUESTIONS: ',
    filter: (answer) => answer.trim()
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    prefix: 'QUESTIONS: ',
    validate: (answer) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(answer)) {
        return "You have to provide a valid email address!"
        }
        return true
    }
}

];