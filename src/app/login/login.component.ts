import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  defautlSection = "DSEN";

  myComment = "Rien à signaler...."
  onSubmit(f) {
    console.log(f);
    
  }
}
