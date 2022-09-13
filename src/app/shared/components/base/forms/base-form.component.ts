import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  template: '',
})
export abstract class BaseFormComponent implements OnInit {
  abstract fields: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.configureFields();
  }

  abstract configureFields(): void;
}
