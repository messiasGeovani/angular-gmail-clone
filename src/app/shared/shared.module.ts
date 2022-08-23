import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { MenuIconComponent } from './components/organisms/menu-icon/menu-icon.component';



@NgModule({
  declarations: [
    MenuIconComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [MaterialModule, MenuIconComponent]
})
export class SharedModule { }
