import { NgModule } from '@angular/core';
import { ThreeJsDemoComponent } from './three-js-demo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ThreeJsDemoComponent,
      },
    ]),
  ],
  declarations: [ThreeJsDemoComponent],
})
export class ThreeJsDemoModule {}
