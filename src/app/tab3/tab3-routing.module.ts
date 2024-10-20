import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'tab5',
    loadChildren: () => import('../tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
