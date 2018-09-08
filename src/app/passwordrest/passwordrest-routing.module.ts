import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordrestComponent } from './passwordrest.component';

const routes: Routes = [
    {
        path: '', component: PasswordrestComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PasswordrestRoutingModule {
}
