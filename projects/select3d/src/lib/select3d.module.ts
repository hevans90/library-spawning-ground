import { NgModule } from '@angular/core';
import { Select3dComponent } from './select3d.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: Select3dComponent,
      },
    ]),
  ],
  declarations: [Select3dComponent],
})
export class Select3dModule {}
