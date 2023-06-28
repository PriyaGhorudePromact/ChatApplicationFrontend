import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient,
              private chatservice: ChatService) {  
  }

  userLoginData: any;

  userLoginForm: any = new FormGroup({
   email: new FormControl(''),
   password: new FormControl(''),
   username: new FormControl('')
 });
 
 loginUser: any = {
   email: '',
   password: '',
   username: ''
 }

  email: string | undefined;
  password: string | undefined;
  username: string | undefined;

  onLogin() {
    this.userLoginData.username = this.userLoginForm.value.username;
    this.userLoginData.email = this.userLoginForm.value.email;
    this.userLoginData.password = this.userLoginForm.value.password;
    return this.chatservice.register(this.userLoginData).subscribe((res: any) => console.log(res));
  }
}
