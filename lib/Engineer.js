// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        super(id, name, role);
        this.github = github;
    }
    getRole(){
        return this.role = 'Engineer'
      }
    getGithub(){

    }
}

module.exports = Engineer;
