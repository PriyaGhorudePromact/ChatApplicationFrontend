import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  constructor(private http: HttpClient, private chatservice: ChatService) {  
   }
  
  obj: any;

  registerUser: any = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl('')
  });

  messageData: any = {
    senderId: ''
  }

  ngOnInit(): void {
  }

  onRegister() {

    this.obj.username = this.registerUser.value.username;
    this.obj.email = this.registerUser.value.username;
    this.obj.password = this.registerUser.value.username;

    this.chatservice.register(this.obj).subscribe((res) => console.log(res));
  }

  // getMessage(){
  //   var url = 'https://localhost:7252/api/Message/GetMessage';
  //   const data = {senderId: this.senderId};
  //   var x = this.http.get(url, this.messageData).subscribe((res) =>{
  //     console.log(res);
  //   })
  //   return x;
  // }
}
