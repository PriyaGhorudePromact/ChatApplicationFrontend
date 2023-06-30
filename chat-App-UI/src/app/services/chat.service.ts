import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  url = 'https://localhost:7252/api/';

  constructor(private http: HttpClient) { }

  register(data:any){
    return this.http.post(this.url + "registration", data);
  }

  login(data:any){
    debugger
    return this.http.post(this.url + "login", data);
  }

  sendMessage(data:any){
    return this.http.post(this.url+"message",data);
  }

  getMessage(data:any){
    return this.http.get(this.url+'Message/GetMessage?${data}');
  }

  user(){
    return this.http.get(this.url+"Users/GetUsers");
  }

  retreveMsg(data:any){
    debugger
    return this.http.get(this.url+'RetriveHistory/${data}');
  }

  deleteMsg(data:any){
    return this.http.delete(this.url+'Message/DeleteMessage',data)
  }

  editMsg(data:any){
    return this.http.put(this.url+'Message/EditMessage?',data);
  }
}