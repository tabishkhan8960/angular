export class Employee {
    employeeId: number;
    employeeName: string;
    contactNo: string;
    emailId: string;
    deptId: number;
    password: string;
    gender: string;
    role: string;
  
    constructor() {
      this.employeeId = 0;
      this.employeeName = '';
      this.contactNo = '';
      this.emailId = '';
      this.deptId = 0;
      this.password = '';
      this.gender = '';
      this.role = 'Employee';
    }
  }

   export interface ParentDept{
    
      departmentId: number,
      departmentName: string,
      departmentLogo: string
    
   }
   export interface ChildDept{
    
    childDeptId: number,
    parentDeptId: string,
    departmentName: string
  
 }
export interface APIResponse{
  
    message: string,
    result: boolean,
    data: any
  
}
export interface GetDashboard
{
  totalEmployee: number,
  totalProject: number,
  recentEmployee: string,
  recentProjects: string
}

export interface customer{
    
  
    code: number,
    name: string,
    address: string,
    addressCode: string,
    categoryCode: string

}