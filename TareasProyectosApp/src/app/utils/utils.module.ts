import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MenuiconComponent } from './menuicon/menuicon.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [MenuiconComponent],
  exports:[MenuiconComponent]
})
export class UtilsPageModule {}
