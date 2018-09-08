import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { CreateUserService } from '../../Services/create-user.service';
import { UserModel } from '../../model/UserModel';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {

    ngOnInit() {}

    model = new UserModel();
    submitted = false;
    success: boolean = false;
    error: boolean = false;
    message: string;
    constructor(private router: Router, private createuserService: CreateUserService) { }


    onSubmit(form: NgForm) {
        this.submitted = true;
        // console.log(form.value);
        console.log(form.value);
        this.createuserService.CreateUser(form.value).subscribe(data => {
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

