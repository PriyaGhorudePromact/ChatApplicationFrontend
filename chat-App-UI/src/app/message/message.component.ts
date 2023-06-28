import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  constructor(private http: HttpClient) {  
  }

  messageData: any = {
    Id: 33,
    senderId: '',
    receiverId: '',
    content: '',
    timestamp:''
  }

  senderId: string | undefined;
  receiverId: string | undefined;
  content: string | undefined;
  timestamp: Date | undefined;

  sendMessage(){
    debugger
    return this.http.post('https://localhost:7252/api/Message', this.messageData).subscribe((res) =>{
      console.log(res);
    })
  }

  getMessage(){
    return this.http.get('https://localhost:7252/api/Message/GetMessage').subscribe((res) =>{
      console.log(res);
    })
  }
}
