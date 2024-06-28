import { Component } from '@angular/core';
import { ReversePipe } from '../../pipes/reverse.pipe'; // Adjust the path if necessary
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reversal',
  templateUrl: './reversal.component.html',
  styleUrls: ['./reversal.component.css'],
  standalone: true,
  imports: [FormsModule, ReversePipe, CommonModule, RouterLink] // Ensure FormsModule is correctly listed
})
export class ReversalComponent {
  inputString: string = '';
  reversedString: string = '';

  constructor(private reversePipe: ReversePipe) {}

  reverseString() {
    this.reversedString = this.reversePipe.transform(this.inputString);
  }
}
