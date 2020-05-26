import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateName } from '../validators/custom.validator';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  departmentList = [
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

    myForm: FormGroup;
  constructor(public employee: EmployeeService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      employeeId: new FormControl(null),
      department: new FormControl(null, Validators.required),
      gender: new FormControl('M', Validators.required),
      firstName: new FormControl('', [Validators.required, validateName]),
      lastName: new FormControl('', Validators.required)
    });


    if (this.employee.selectEmployee) {
      console.warn(this.employee.selectEmployee);
      this.myForm.patchValue(this.employee.selectEmployee);
    }


  }

  setValue() {
    this.myForm.get('firstName').setValue('oreo');
  }

  patchValue() {
    this.myForm.patchValue({
      department: { departmentCode: '001',
       departmentName: 'Sale' },
      gender: 'M',
      firstName: 'hello',
      lastName: 'hi'
    });

    this.myForm.get('firstName').disable();
  }

  saveForm() {
    if (this.myForm.valid) {
      if (this.myForm.getRawValue().employeeId) {
        // Edit
        this.employee.editEmployeeApi(this.myForm.getRawValue());
      } else {
        // Add
        this.employee.addEmployeeApi(this.myForm.getRawValue());
      }
    }
  }
}
