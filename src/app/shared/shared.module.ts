import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuIconComponent } from './components/organisms/menu-icon/menu-icon.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [MenuIconComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, MenuIconComponent],
})
export class SharedModule {}
