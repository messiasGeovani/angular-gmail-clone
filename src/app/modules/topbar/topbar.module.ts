import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailFilterComponent } from './components/organisms/mail-filter/mail-filter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormMailFilterComponent } from './components/organisms/form-mail-filter/form-mail-filter.component';
import { FormsModule } from '@angular/forms';
import { TopbarComponent } from './topbar.component';

@NgModule({
  declarations: [MailFilterComponent, FormMailFilterComponent, TopbarComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [TopbarComponent],
})
export class TopbarModule {}
