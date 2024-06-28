import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-userdashboard',
  standalone: true,
  imports: [RouterLink, LoginpageComponent, ReversePipe, RegisterComponent],
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {

  dashboard = 'Dashboard'

}
