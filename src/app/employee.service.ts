import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee() :Array<any> {
    return [{
      firstname: "John",
      lastname: "Doe",
      email: "john@example.com"
    }, {
      firstname: "Mary",
      lastname: "Moe",
      email: "mary@example.com"
    },
    {
      firstname: "July",
      lastname: "Dooley",
      email: "july@example.com"
    }]
  }

  addEmployee(employeeList, employee){
    employeeList.push(employee);
   return employeeList;
  }

  deleteEmployee(employeeList){
     employeeList.splice(0, 1);
   return employeeList;
  }
}
