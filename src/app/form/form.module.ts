import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: 'form', component: FormComponent }]),
      FormsModule,
      BrowserModule
  ],
  declarations: [
    FormComponent
  ]
})
export class FormModule { }
