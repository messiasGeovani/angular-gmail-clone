import { Component, OnInit } from '@angular/core';

@Component({
  template: '',
})
export abstract class BaseFormComponent implements OnInit {
  abstract fields: { [key: string]: any };

  constructor() {}

  ngOnInit(): void {}
}
