import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected to 'styleUrls'
})
export class LoginComponent {
  loginObj: any = {
    "userName": "",
    "password": ""
  };

  http = inject(HttpClient);
  router = inject(Router); // Inject Router

  onLogin() {
    this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/login", this.loginObj).subscribe((res: any) => {
      if (res.result) {
        localStorage.setItem("leaveUser", JSON.stringify(res.data));
        this.router.navigateByUrl("dashboard"); // Use this.router to navigate
      } else {
        this.router.navigateByUrl("dashboard");
      }
    });
  }
}
