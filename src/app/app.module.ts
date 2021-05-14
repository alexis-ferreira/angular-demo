import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { PluralizePipe } from './pipes/pluralize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    PluralizePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
