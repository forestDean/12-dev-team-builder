// TODO: Write code to define and export the Employee class
class Employee {
constructor(name, id, email) {
    this.name = name;  
    this.id = id;
    this.email = email;
  }
  getId(){
    this.id = id;
  }
  getName(){
    this.name = name; 
  }
  getEmail(){
    this.email = email;
  }
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