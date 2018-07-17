import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const modules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule,
];

@NgModule({
  imports: [CommonModule, ...modules],
  exports: [...modules],
  declarations: [],
})
export class MaterialManifestModule {}
