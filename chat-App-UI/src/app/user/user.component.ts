import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { FormControl, FormGroup } from '@angular/forms';
import { userModel} from '../Models/userModel'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private http: HttpClient,
    private chatservice: ChatService) {  
  }
  ngOnInit() {
    this.getUsers();
 }

  regUser: any;
  userId: string | undefined;
  category: userModel[] | undefined;

  
  userData: any = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl('')
  });

  getUsers(){
    return this.chatservice.user().subscribe((res: any) => {
      console.log(res)
      this.regUser = res;
    })
  }
}
