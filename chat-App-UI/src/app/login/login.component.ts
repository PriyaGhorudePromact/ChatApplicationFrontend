import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChatService } from '../services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient,
              private chatservice: ChatService,
              private router: Router) {  
  }

  userLoginForm: any = new FormGroup({
   email: new FormControl(''),
   password: new FormControl(''),
   username: new FormControl('')
 });

  onLogin() {
    return this.chatservice.login(this.userLoginForm.value).subscribe((res: any) => 
    // console.log("login successful")
    this.router.navigate(['message']));
  }
}
