import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { EmployeeService} from '../employee.service';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      providers: [EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return Employee List', () => {
    expect(component.employeeList.length).toEqual(3);
  });

  it('should Add Employee', () => {
    component.onAddEmployee();
    expect(component.employeeList.length).toEqual(4);
  });

  it('should Delete Employee', () => {
    component.onDeleteEmployee();
    expect(component.employeeList.length).toEqual(2);
  });
});
