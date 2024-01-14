import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPlacePage } from './new-place.page';

const routes: Routes = [
  {
    path: '',
    component: NewPlacePage
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPlacePageRoutingModule {}
