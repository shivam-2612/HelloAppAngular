import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userName: string = "";
  message: string = "Hello from BridgeLabz";
  logoUrl: string = "assets/logo.jpg";
  errorMessage: string = "";

  openBridgeLabzSite() {
    window.open("https://www.bridgelabz.com", "_blank");
  }
  // ✅ Validate Name Format
  validateName() {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/; // Starts with Capital, at least 3 letters
    if (!this.userName.match(namePattern)) {
      this.errorMessage = "Name must start with a capital letter and have at least 3 letters.";
    } else {
      this.errorMessage = "";
    }
  }
}


