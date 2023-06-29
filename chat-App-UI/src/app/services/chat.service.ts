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

  getMessage(){
    return this.http.get(this.url+'Message/GetMessage');
  }

  user(){
    return this.http.get(this.url+"Users/GetUsers");
  }
}