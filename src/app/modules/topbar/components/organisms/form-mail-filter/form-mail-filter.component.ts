import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from 'src/app/shared/components/base/organisms/forms/base-form.component';
import { SearchFieldsModel } from './models/search-fields.model';

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
  fields: SearchFieldsModel = { from: '' };

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
