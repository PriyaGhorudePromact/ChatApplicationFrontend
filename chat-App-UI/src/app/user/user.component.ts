import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private http: HttpClient) {  
  }

  messageData: any = {
    userId: ''
  }
  userId: string | undefined;

  getUsers(){
    return this.http.get('https://localhost:7252/api/Users/GetUsers').subscribe((res) =>{
      console.log(res);
    })
  }
}
