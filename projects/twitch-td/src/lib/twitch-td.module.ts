import { NgModule } from '@angular/core';
import { TwitchTdComponent } from './twitch-td.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: TwitchTdComponent,
      },
    ]),
  ],
  declarations: [TwitchTdComponent],
  exports: [TwitchTdComponent],
})
export class TwitchTdModule {}
