import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  languages = ['English', 'Spanish', 'Other'];

  constructor() { }

  ngOnInit() {
  }

}
