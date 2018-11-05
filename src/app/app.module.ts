import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FooModule } from './foo/foo.module';
import { AppComponent } from './app.component';
import { FooDirective } from './foo.directive';
import { CapitalisePipe } from './capitalise.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooDirective,
    CapitalisePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
