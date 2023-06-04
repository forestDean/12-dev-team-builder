// TODO: Write code to define and export the Employee class
class Employee {
constructor(id, name, role, email) {
    this.id = 0;
    this.name = name;
    this.email = email;
  }
  getId(){}
  getName(){}
  getEmail(){}
  getRole(){
    return this.role = 'Employee'
  }

//   updateId(){
//     this.id++;
//     return this;
//   }
}


//const employeeOne = new Employee(1, 'Bill Gates', 'manager', 'bill@microsoft.com', 'microsoft', 101, 'Harvard')
//console.log(employeeOne);



module.exports = Employee;