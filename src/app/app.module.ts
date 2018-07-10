import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Select3dModule } from 'select3d';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Select3dModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
