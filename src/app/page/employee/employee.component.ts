import { Component, inject, OnInit } from '@angular/core';
import { APIResponse, ChildDept, customer, Employee, ParentDept } from '../../model/master';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
employeeObj: Employee = new Employee();
parentDeptId: string ='';
masterSrv = inject(MasterService)
ParentDepartmentList: ParentDept []=[]
childDepartmentList: ChildDept []=[]
employeeList: Employee[]=[]
getcustomer2: customer[]=[]

ngOnInit(): void {
  this.loadParentDept();
  this.loadEmployees();
  this.allcustomer();



}
loadParentDept(){
  this.masterSrv.getDepartment().subscribe((res:APIResponse)=>{
this.ParentDepartmentList = res.data;
  })
}
loadEmployees(){
  this.masterSrv.GetAllEmployees().subscribe((res:Employee[])=>{
this.employeeList = res;
  })
}
allcustomer(){
  this.masterSrv.getcustomer().subscribe((res:customer[])=>{
this.getcustomer2 = res;
  })
}
onDelete(id: number){
 const isDelete = confirm("are you sure want delete");
 if(isDelete)
 {
  this.masterSrv.DeleteEmp(id).subscribe((res:Employee[])=>{
   this.loadEmployees(); 
  })
 }


}
onDeptChange(){
  this.masterSrv.GetChildDepartmentByParentId(this.parentDeptId).subscribe((res:APIResponse)=>
  {
    this.childDepartmentList = res.data;
  })
}
onSaveEmployee(){
  this.masterSrv.createNewEmployee(this.employeeObj).subscribe((res:Employee)=>{

alert("Employee Created Success");
this.employeeObj=new Employee();
this.loadEmployees(); 

  })

}
}
