import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialManifestModule } from './material-manifest/material-manifest.module';

@NgModule({
  imports: [
    BrowserModule,
    MaterialManifestModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        {
          path: 'webGL',
          loadChildren: 'three-js-demo#ThreeJsDemoModule',
        },
        {
          path: 'tensorFlow',
          loadChildren: 'tensor-time#TensorTimeModule',
        },
        {
          path: 'canvasGame',
          loadChildren: 'twitch-td#TwitchTdModule',
        },
      ],
      { initialNavigation: 'enabled' },
    ),
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
