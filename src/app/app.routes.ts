import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { LayoutComponent } from './page/layout/layout.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { EmployeeComponent } from './page/employee/employee.component';
import path from 'path';


export const routes: Routes = [
    {
    path:'',
    redirectTo:'login',
    pathMatch: "full"
    },
    {
    path:'login',
    component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent

            },
            {
                path:'employee',
                component:EmployeeComponent
            },
           
        ]
    }
];
