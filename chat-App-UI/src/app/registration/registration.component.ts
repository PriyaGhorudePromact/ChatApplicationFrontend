import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  constructor(private http: HttpClient, private user:UserService) {  
   }
  
  registerUser: any = {
    email: '',
    password: '',
    username: ''
  }

  ngOnInit(): void {
  }

  email: string | undefined;
  password: string | undefined;
  username: string | undefined;

  onRegister() {
    const data = { username: this.username, email: this.email, password: this.password };
    const headers = new HttpHeaders({'myHeader': 'register'});
 
    return this.user.register(data);

    // return this.http.post('https://localhost:7252/api/Registration', data).subscribe((res) =>{
    //   console.log(res);
    // })

  }
}
