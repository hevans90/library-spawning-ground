import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// library projects
import { Select3dModule } from 'select3d';
import { TensorTimeModule } from 'tensor-time';

import { AppComponent } from './app.component';
import { MaterialManifestModule } from './material-manifest/material-manifest.module';

@NgModule({
  imports: [
    BrowserModule,
    MaterialManifestModule,
    BrowserAnimationsModule,
    Select3dModule,
    TensorTimeModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
