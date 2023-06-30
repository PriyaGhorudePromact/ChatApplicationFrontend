import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChatService } from '../services/chat.service';
import { messageData } from '../Models/messageData';
import { userModel } from '../Models/userModel';

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

 msgdata: messageData[] = [];
 userDt: userModel[] = [];
 id: string | undefined;
 btnEnable = true;

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

  userData: any = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl('')
  });
  
  getUsers(){
      this.chatservice.user().subscribe((res: any) => {
      this.userDt = res;
    })
    return this.userDt; 
  }

  sendMessage(){
    if (this.newMessage.trim() === '') {
      return;
    }
      this.chatservice.sendMessage(this.usermsg.value).subscribe();    
  }

  getMessage(id:any){
 this.chatservice.getMessage(id).subscribe((res) => 
    console.log("data",res)); 
  }

  getHistory(id:any){
    // debugger
    // this.chatservice.retreveMsg(id).subscribe((res) => 
    // this.msgdata = res); 
    this.chatservice.retreveMsg(id).subscribe((res: any) => {
      this.msgdata = res;
  })
    return this.msgdata; 
  }

  enableBtn(id:any){
    this.id = id;
  }

  deleteMessage(id:any){
    this.chatservice.deleteMsg(id).subscribe();
    this.btnEnable = false;
  }

  editMessage(id:any){
    this.chatservice.editMsg(id).subscribe();
  }
}
