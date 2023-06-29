import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  constructor(private http: HttpClient,
    private chatservice: ChatService) {  
  }

  ngOnInit() {
    this.getUsers();
 }

 newMessage = '';
  msg: any = new FormGroup({
    
    Id: new FormControl(''),
    senderId: new FormControl(''),
    receiverId: new FormControl(''),
    content: new FormControl(''),
    timestamp:new FormControl('')

  });

  messageData: any = {
    Id: '',
    senderId: '',
    receiverId: '',
    content: '',
    timestamp:''
  }

  // senderId: string | undefined;
  // receiverId: string | undefined;
  // content: string | undefined;
  // timestamp: Date | undefined;
  usermsg: any = new FormGroup({
  
    senderId:  new FormControl(''),
    receiverId:  new FormControl(''),
    content:  new FormControl(''),
    timestamp:  new FormControl(''),
  });
  
  getUsers(){
    return this.chatservice.user().subscribe((res: any) => {
      console.log(res);
    })
  }

  sendMessage(){
    if (this.newMessage.trim() === '') {
      return;
    }
    debugger
      this.chatservice.sendMessage(this.usermsg.value).subscribe((res) => 
      console.log(res));    
  }

  getMessage(){
    this.chatservice.getMessage().subscribe((res) => 
    this.usermsg = res); 
  }
}
