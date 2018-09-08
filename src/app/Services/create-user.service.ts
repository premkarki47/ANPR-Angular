import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Config } from '../config/config';

@Injectable({
    providedIn: 'root'
  })
export class CreateUserService {
    

    constructor(private http:HttpClient) { }
  
    CreateUser(value){
        return this.http.post(Config.userUrl.concat('user'),value);
  
  
    }
  
  
  
  

}
