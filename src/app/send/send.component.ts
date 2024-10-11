import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrl: './send.component.css'
})
export class SendComponent {
  message=""
  userName=""
  constructor(private base:BaseService, private auth:AuthService){
    auth.getUserName().subscribe(
      (res)=>this.userName=res
    )
  }

  sendMessage(){
    this.base.addMessage(this.message)
    this.message=""
  }
}
