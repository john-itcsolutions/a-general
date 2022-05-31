import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NetmemclassesPage } from './netmemclasses.page';

const routes: Routes = [
  {
    path: '',
    component: NetmemclassesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NetmemclassesPage]
})
export class NetmemclassesPageModule {}
