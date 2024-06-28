import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserdashboardComponent } from '../userdashboard/userdashboard.component';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [NavbarComponent, RouterLink, RegisterComponent, UserdashboardComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
          
       
}
