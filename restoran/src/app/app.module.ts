import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestoranKodComponent } from './restoran-kod/restoran-kod.component';

@NgModule({
  declarations: [
    AppComponent,
    RestoranKodComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
