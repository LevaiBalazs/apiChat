import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private url="https://szoftii1n-default-rtdb.europe-west1.firebasedatabase.app/messages.json"

  //"http://172.16.16.148:7178/api/Messages/"

  private messageSubject = new Subject();

  constructor(private http:HttpClient) { 
    this.downloadAllMessage()
    setInterval(()=>this.http.get(this.url).forEach(
      (res)=>this.messageSubject.next(res) 
    ), 5000)
  }

  addMessage(message:string){
    let body:any={}
    body.userName="Matuka"
    body.uzi=message
   
    console.log("Body:", body)

    this.http.post(this.url,body).forEach(
      (res)=>console.log("Sikeres üzi küldés", res)
    )

  }
  getAllMessage(){
    return this.messageSubject

  }
  
  private downloadAllMessage(){
   this.http.get(this.url).subscribe(
      (res)=>this.messageSubject.next(res) 
    )
    
  }

}
