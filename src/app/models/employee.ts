import { Department } from './department';

export interface Employee {
    employeeId: string;
    title: string;
    firstName: string;
    lastName: string;
    gender: string;
    department: Department;
}

