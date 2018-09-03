import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { FormPosterService } from '../services/FormPostService';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'pm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  languages = [];
  model = new Employee('', '', true, '', 'default', '');
  hasPrimaryLanguageError = false;

  constructor(private formPostService : FormPosterService){
    this.formPostService.getLanguages()
          .subscribe(
            data => this.languages = data.languages,
            err => console.log('get error: ', err)
          );
  }

  submitForm(form: NgForm){
    this.validatePrimaryLanguage(this.model.primaryLanguage);

    if(this.hasPrimaryLanguageError){
      return;
    }

    this.formPostService.postEmployeeForm(this.model)
      .subscribe(
        data => console.log('success: ', data),
        err => console.log('error: ', err)
      );
  }

  validatePrimaryLanguage(event){
    if(this.model.primaryLanguage === 'default'){
      this.hasPrimaryLanguageError = true;
    }
    else {
      this.hasPrimaryLanguageError = false;
    }
    console.log(this.hasPrimaryLanguageError);
  }

}
