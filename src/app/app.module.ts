import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Select3dModule } from 'select3d';
import { TensorTimeModule } from 'tensor-time';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Select3dModule, TensorTimeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
