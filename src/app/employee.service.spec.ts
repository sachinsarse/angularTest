import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });
  it('should return employee list', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service.getEmployee().length).toEqual(3);
  });  
  it('should add employee', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    let employees = [{
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
    }];
  
    let employee = {
      firstname: "Tom",
      lastname: "Doe",
      email: "Tom@example.com"
    }
    expect(service.addEmployee(employees, employee).length).toEqual(4);
  });

  it('should delete employee', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    let employees = [{
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
    }];
    expect(service.deleteEmployee(employees).length).toEqual(2);
  });

});
