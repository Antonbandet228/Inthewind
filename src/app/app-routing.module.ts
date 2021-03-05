import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
          pathMatch: 'full'
        },
      ]
    )
  ]
})


export class AppRoutingModule {
}
