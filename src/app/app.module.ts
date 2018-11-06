import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FooModule } from './foo/foo.module';
import { AppComponent } from './app.component';
import { FooDirective } from './foo.directive';
import { CapitalisePipe } from './capitalise.pipe';
import { DashboardModule } from './dashboard/dashboard.module';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule // Toujours mettre les routes en dernier afin que tous les modules soient préalablement chargés
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
