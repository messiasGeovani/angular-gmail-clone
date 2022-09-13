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
      sizeOrder: [''],
      sizeMeasurement: [null],
      sizeType: ['MB'],
      dateWithin: ['1 day'],
      mailDate: [null],
      searchIn: ['all mail'],
      hasAttachment: [false],
      includeChats: [false],
    });
  }
}
