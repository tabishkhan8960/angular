import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AsyncLocalStorage } from 'async_hooks';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  loggedUserData: any;
  router = inject(Router);

  constructor(){
    const localData = localStorage.getItem("leaveUser");
    if(localData){
      this.loggedUserData = JSON.parse(localData);
    }
  }
  onLogoff(){
 localStorage.removeItem("leaveUser");
 this.router.navigateByUrl("login")
  }
  
}
