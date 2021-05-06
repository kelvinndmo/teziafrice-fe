import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import {AuthData} from "./auth-data.model"; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient){}  
  CreateUser(email:string, password:string) {
    const authData: AuthData = {email: email, password: password} 
    this.http.post("https://tezi-be.herokuapp.com/register",authData) 
    .subscribe(response =>{  
      console.log(response);  
  })   
   }
}
function subscribe(arg0: (response: any) => void) {
  throw new Error('Function not implemented.');
}

