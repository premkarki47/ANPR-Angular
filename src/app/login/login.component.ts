import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { UserService } from '../Services/user.service';
import { LoginModel } from '../model/loginModel';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    ngOnInit() {}


    model = new LoginModel();
    submitted = false;
    success: boolean = false;
    error: boolean = false;
    message: string;
    constructor(private router: Router, private userService: UserService) { }


    onSubmit(form: NgForm) {
        this.submitted = true;
        // console.log(form.value);
        console.log(form.value);
        this.userService.loginUser(form.value).subscribe(data => {
            console.log("Credentials", data);

            this.router.navigate(['/dashboard']);

        },
            error => {
                this.error = true;

                if (error.error['message']) {
                    this.message = error.error['message'];
                }
                else {
                    this.message = error.message;
                }

            });

    }
}
