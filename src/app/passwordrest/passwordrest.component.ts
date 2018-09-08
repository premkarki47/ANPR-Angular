import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-Passwordrest',
    templateUrl: './passwordrest.component.html',
    styleUrls: ['./passwordrest.component.scss'],
    animations: [routerTransition()]
})
export class PasswordrestComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
