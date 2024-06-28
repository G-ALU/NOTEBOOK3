import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginpageComponent } from '../loginpage/loginpage.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [RouterLink, LoginpageComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

}
