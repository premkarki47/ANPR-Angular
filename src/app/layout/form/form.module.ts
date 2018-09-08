import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule,FormsModule,HttpClientModule],
    declarations: [FormComponent]
})
export class FormModule {


}
