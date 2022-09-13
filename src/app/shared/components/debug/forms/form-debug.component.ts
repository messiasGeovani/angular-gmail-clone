import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html'
})
export class FormDebugComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() {}

  ngOnInit() {}
}
