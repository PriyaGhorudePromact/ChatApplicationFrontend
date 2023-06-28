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
    return this.http.post(this.url + "login", data);
  }

  message(data:any){
    return this.http.post(this.url+"message",data);
  }
}