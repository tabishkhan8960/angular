import { Component, OnInit,inject } from '@angular/core';
import { GetDashboard } from '../../model/master';
import { MasterService } from '../../services/master.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  masterSrv = inject(MasterService)

  ParentDepartmentList: number = 0;
  ngOnInit(): void {
    this.loadParentDept();
  }
  loadParentDept(){
    this.masterSrv.GetDashboard().subscribe((res:GetDashboard)=>{
      this.ParentDepartmentList=res.totalEmployee;
      console.log("tabish",res);
    })
}

navigateToUrl() {
  window.location.href = 'https://www.visualace.com/Home'; 
}
navigateToUrl2() {
  window.location.href = 'https://api.whatsapp.com/send?phone=971504567077'; 
}
}