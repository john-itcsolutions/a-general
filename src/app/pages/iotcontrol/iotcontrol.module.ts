import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IotcontrolPage } from './iotcontrol.page';

const routes: Routes = [
  {
    path: '',
    component: IotcontrolPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IotcontrolPage]
})
export class IotcontrolPageModule {}
