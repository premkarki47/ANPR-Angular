import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModel } from '../model/loginModel';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { NgForm } from '@angular/forms';

@NgModule({
    imports: [CommonModule, LoginRoutingModule,
        FormsModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {


}
