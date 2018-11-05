import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    FooComponent,
    BarComponent
  ],
  exports: [
    FooComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FooModule { }
