import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormMailFilterComponent } from './components/form-mail-filter/form-mail-filter.component';
import { MailFilterButtonComponent } from './components/mail-filter-button/mail-filter-button.component';
import { TopbarComponent } from './topbar.component';
import { SearchMailInputComponent } from './components/search-mail-input/search-mail-input.component';

@NgModule({
  declarations: [
    MailFilterButtonComponent,
    FormMailFilterComponent,
    TopbarComponent,
    SearchMailInputComponent,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [TopbarComponent],
})
export class TopbarModule {}
