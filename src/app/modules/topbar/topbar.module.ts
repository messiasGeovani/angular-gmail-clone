import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormMailFilterComponent } from './components/organisms/form-mail-filter/form-mail-filter.component';
import { MailFilterComponent } from './components/organisms/mail-filter/mail-filter.component';
import { TopbarComponent } from './topbar.component';

@NgModule({
  declarations: [MailFilterComponent, FormMailFilterComponent, TopbarComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [TopbarComponent],
})
export class TopbarModule {}
