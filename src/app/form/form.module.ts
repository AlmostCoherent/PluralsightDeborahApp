import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormPosterService } from '../services/FormPostService';
import { HttpModule } from '../../../node_modules/@angular/http';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: 'form', component: FormComponent }]),
      FormsModule,
      BrowserModule,
      HttpModule,
      NgbCarouselModule.forRoot()
  ],
  declarations: [
    FormComponent,
  ],
  providers: [FormPosterService]
})
export class FormModule { }
