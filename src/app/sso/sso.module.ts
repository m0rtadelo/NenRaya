import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsoComponent } from './sso.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SsoComponent],
  exports: [SsoComponent]
})
export class SsoModule { }
