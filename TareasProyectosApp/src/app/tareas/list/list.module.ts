import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListPage } from './list.page';
import { UtilsPageModule } from 'src/app/utils/utils.module';

const routes: Routes = [
  {
    path: '',
    component: ListPage
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
  declarations: [ListPage]
})
export class ListPageModule {}
