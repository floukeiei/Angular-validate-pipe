import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Condition } from '../models/condition';
import { Department } from '../models/department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

department = [
      {
          departmentCode: '001',
          departmentName: 'Sale'
      },
      {
          departmentCode: '002',
          departmentName: 'IT'
      },
      {
          departmentCode: '003',
          departmentName: 'HR'
      }
  ];

  selectDepartment: Department = null;
  selectGender = 'M';
  firstName = '';
  lastName = '';

  employeeList = [];
  constructor(public empService: EmployeeService,
              public router: Router) { }

  ngOnInit() {

    this.selectGender = 'F';
    console.warn('searchInit');

    console.log('fromService', this.empService.a);
  }

  add() {

    const employee = {
      department: this.selectDepartment,
      gender: this.selectGender,
      firstName: this.firstName,
      lastName: this.lastName
    };
    this.employeeList.push(employee);
  }


  addtoService() {
    const employee = {
      department: this.selectDepartment,
      gender: this.selectGender,
      firstName: this.firstName,
      lastName: this.lastName
    };

    this.empService.addEmployee(employee);
  }

  searchEmployee() {
    let departmentCode = '';
    if (!!this.selectDepartment) {
      departmentCode = this.selectDepartment.departmentCode;
    }

    const condition: Condition = {
      departmentCode,
      gender:  this.selectGender,
      firstName: this.firstName,
      lastName: this.lastName
    };
    this.empService.getEmployeeByCondition(condition);
  }

  gotoAdd() {
    this.router.navigate(['add']);
  }

}
