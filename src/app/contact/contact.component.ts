import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  employeeList = []
  ngOnInit() {
    this.employeeList = [{
      firstname: "John",
      lastname: "Doe",
      email: "john@example.com"
    },{
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

  getEmployeeList(){
    this.employeeList = [{
      firstname: "John",
      lastname: "Doe",
      email: "john@example.com"
    },{
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
}
