import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  @Input()
  empList = [];
  constructor(public empService: EmployeeService,
              public router: Router,
              private confirmationService: ConfirmationService) { }

  ngOnInit() {
  }

  gotoEdit(emp: Employee) {
    this.empService.selectEmployee = emp;
    this.router.navigate(['edit']);
  }

  deleteById(emp: Employee, index: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.empService.deleteEmployeeById(emp.employeeId, index);
      }
  });

  }
}
