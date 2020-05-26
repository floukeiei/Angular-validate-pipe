import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Condition } from '../models/condition';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  a = 10;
  employeeList = [];

  selectEmployee: Employee;

  employeeFromServiceList: Employee[] = [];
  constructor(private http: HttpClient) { }


  addEmployee(employee) {
    this.employeeList.push(employee);
  }

  getEmployeeByCondition(condition) {

    const params = new HttpParams({fromObject : condition});
    this.http.get<Employee[]>('/workshop-api/api/employee/queryEmployeeByCondition'
    , {params}).subscribe(
      value => {
        this.employeeFromServiceList = value;
        console.warn('queryEmployeeByCondition', value);
      });
  }

  addEmployeeApi(payload: Employee) {
    this.http.post<Employee>('/workshop-api/api/employee', payload).subscribe(
      response => {
        console.log('response', response);
      }
    );
  }

  editEmployeeApi(payload: Employee) {
    this.http.put<Employee>('/workshop-api/api/employee', payload).subscribe(
      response => {
        console.log('response', response);
      }
    );
  }

  deleteEmployeeById(employeeId: string, index: number) {
    this.http.delete('/workshop-api/api/employee/' + employeeId).subscribe(
      response => {
        this.employeeFromServiceList.splice(index, 1);
        console.log('response', response);
      }
    );
  }
}
