// TODO: Write code to define and export the Employee class
class Employee {
constructor(name, id, email) {
    this.name = name;  
    this.id = id;
    this.email = email;
  }
  getName(){
    return this.name; 
  }
  getId(){
    return this.id;
  }
  getEmail(){
    return this.email;
  }
  getRole(){
    return this.role = 'Employee'
  }
}

// const manager = new Employee('Bill Gates', '01', 'bill@microsoft.com');
// const engineer = new Employee();
// const intern = new Employee();
// console.log(manager);
// console.log(manager.getName());
// //console.log(manager.getName().getEmail()); //error: .getEmail is not a function
// const Employee = [manager, engineer, intern]

//const employeeOne = new Employee(1, 'Bill Gates', 'manager', 'bill@microsoft.com', 'microsoft', 101, 'Harvard')
//console.log(employeeOne);



module.exports = Employee;