import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortafolioModule } from './portafolio/portafolio.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PortafolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
