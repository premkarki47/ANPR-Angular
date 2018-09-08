import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config/config';
import { LoginModel} from '../model/loginModel';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  loginUser(value){
      return this.http.post(Config.loginUrl.concat('login'),value);


  }

  postSth(value){
    return this.http.post('URL', value);
  }





}
