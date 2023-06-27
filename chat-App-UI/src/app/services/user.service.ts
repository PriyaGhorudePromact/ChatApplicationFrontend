import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://localhost:7252/api';

  constructor(private http: HttpClient) { }

  register(data:any){
    return this.http.post(this.url, data);
  }
}
