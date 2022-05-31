import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AiinterfacePage } from './aiinterface.page';

const routes: Routes = [
  {
    path: '',
    component: AiinterfacePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AiinterfacePage]
})
export class AiinterfacePageModule {}
