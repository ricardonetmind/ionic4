import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TareasPage } from './tareas.page';

const routes: Routes = [
  {
    path: '',
    component: TareasPage,
    children:[
      { path: 'list', loadChildren: './list/list.module#ListPageModule' },
      { path: 'new', loadChildren: './new/new.module#NewPageModule' },
      { path: ':tid', loadChildren: './detail/detail.module#DetailPageModule' },
      { path: '', redirectTo:'list'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TareasPage]
})
export class TareasPageModule {}
