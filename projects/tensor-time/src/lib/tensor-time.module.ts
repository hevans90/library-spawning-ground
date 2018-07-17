import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TensorTimeComponent } from './tensor-time.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: TensorTimeComponent,
      },
    ]),
  ],
  declarations: [TensorTimeComponent],
  exports: [TensorTimeComponent],
})
export class TensorTimeModule {}
