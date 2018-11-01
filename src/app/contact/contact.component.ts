import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../employee.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [EmployeeService]
})
export class ContactComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }
  employeeList = []
  ngOnInit() {
    this.employeeList = this._employeeService.getEmployee();
  }

  onAddEmployee(){
    let employee = {
      firstname: "Tom",
      lastname: "Doe",
      email: "Tom@example.com"
    }
    this.employeeList = this._employeeService.addEmployee(this.employeeList, employee)
  }

  onDeleteEmployee(){
    this.employeeList = this._employeeService.deleteEmployee(this.employeeList);
  }
}
