import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProyectosPage } from './proyectos.page';
import { ListPage } from './list/list.page';
import { NewPage } from './new/new.page';
import { DetailPage } from './detail/detail.page';
import { UtilsPageModule } from '../utils/utils.module';

const routes: Routes = [
  {
    path: '',
    component: ProyectosPage,
    children:[
      {path:'list',component:ListPage},
      {path:'new',component:NewPage},
      {path:':pid',component:DetailPage},
      {path:'',redirectTo:'list'},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    UtilsPageModule
  ],
  declarations: [ProyectosPage,ListPage, NewPage, DetailPage]
})
export class ProyectosPageModule {}
