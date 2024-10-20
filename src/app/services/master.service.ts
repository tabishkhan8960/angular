import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, customer, Employee ,GetDashboard} from '../model/master';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  parentDeptId() {
    throw new Error('Method not implemented.');
  }

  apiUrl: string="https://projectapi.gerasim.in/api/EmployeeManagement/";
  constructor(private http:HttpClient) { }

  getDepartment(): Observable<APIResponse>{
    return this.http.get<APIResponse>(this.apiUrl + "GetParentDepartment")
  }
  GetChildDepartmentByParentId(id:string): Observable<APIResponse>{
    return this.http.get<APIResponse>(this.apiUrl + "GetChildDepartmentByParentId?deptId=" + id)
  }

  createNewEmployee(obj: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}CreateEmployee`, obj);
  }
  GetAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl + "GetAllEmployees")
  }
  DeleteEmp(id: number): Observable<Employee[]>{
    return this.http.delete<Employee[]>(this.apiUrl + "DeleteEmployee/"+id)
  }
  GetDashboard(): Observable<GetDashboard>{
    return this.http.get<GetDashboard>(this.apiUrl + "GetDashboard")
  }
  getcustomer(): Observable<customer[]>{
    return this.http.get<customer[]>("https://localhost:7101/api/CustomerDetails")
  }
}
