import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormDebugComponent } from './components/debug/forms/form-debug.component';
import { MenuIconComponent } from './components/organisms/menu-icon/menu-icon.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [MenuIconComponent, FormDebugComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, MenuIconComponent, FormDebugComponent],
})
export class SharedModule {}
