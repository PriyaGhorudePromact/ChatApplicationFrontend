import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChatService } from '../services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  constructor(private http: HttpClient, 
    private chatservice: ChatService,
    private router: Router) {  
   }

  registerUser: any = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl('')
  });

  ngOnInit(): void {
  }

  onRegister() {
    this.chatservice.register(this.registerUser.value).subscribe((res) => 
    this.router.navigate(['login']));    
  }

  onDelete(){
    this.chatservice
  }
}
