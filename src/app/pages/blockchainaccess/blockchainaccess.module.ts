import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BlockchainaccessPage } from './blockchainaccess.page';

const routes: Routes = [
  {
    path: '',
    component: BlockchainaccessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BlockchainaccessPage]
})
export class BlockchainaccessPageModule {}
