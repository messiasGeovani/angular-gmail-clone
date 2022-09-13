import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseFormComponent } from 'src/app/shared/components/base/forms/base-form.component';

@Component({
  selector: 'app-form-mail-filter',
  templateUrl: './form-mail-filter.component.html',
  styleUrls: ['./form-mail-filter.component.scss'],
})
export class FormMailFilterComponent
  extends BaseFormComponent
  implements OnInit
{
  inputTeste = '';
  fields: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();
    super.ngOnInit();
  }

  ngOnInit(): void {}

  configureFields(): void {
    this.fields = this.formBuilder.group({
      from: [''],
      to: [''],
      subject: [''],
      hasTheWords: [''],
      doesntHave: [''],
      size: this.formBuilder.group({
        order: ['greater than'],
        measurementNumber: [null],
        measureType: ['MB'],
      }),
      dateWithin: ['1 day'],
      searchIn: ['all mail'],
      hasAttachment: [false],
      includeChats: [false],
    });
  }
}
