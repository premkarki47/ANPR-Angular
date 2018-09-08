import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordrestRoutingModule } from './passwordrest-routing.module';
import { PasswordrestComponent } from './passwordrest.component';

@NgModule({
  imports: [
    CommonModule,
    PasswordrestModule
  ],
  declarations: [PasswordrestComponent]
})
export class PasswordrestModule { }
