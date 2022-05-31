import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InventorymngmntPage } from './inventorymngmnt.page';

const routes: Routes = [
  {
    path: '',
    component: InventorymngmntPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InventorymngmntPage]
})
export class InventorymngmntPageModule {}
