import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserdashboardComponent } from '../userdashboard/userdashboard.component';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, NavbarComponent, UserdashboardComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
