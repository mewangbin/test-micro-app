import { OneComponent } from './views/one/one.component';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoComponent } from '@views/two/two.component';

const routes: Routes = [
  {
    path: 'one',
    component: OneComponent,
  },
  {
    path: 'two',
    component: TwoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      // @ts-ignore
      useValue: window.__MICRO_APP_BASE_ROUTE__ || '/',
    },
  ],
})
export class AppRoutingModule {}
