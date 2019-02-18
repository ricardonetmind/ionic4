import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProyectosPage } from './proyectos.page';
import { NewPage } from './new/new.page';
import { DetailPage } from './detail/detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProyectosPage,
    children: [
      { path: 'new', component: NewPage },
      { path: ':pid', component: DetailPage },
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
  declarations: [ProyectosPage, NewPage, DetailPage]
})
export class ProyectosPageModule { }
