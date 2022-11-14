import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraProdutosPageRoutingModule } from './compra-produtos-routing.module';

import { CompraProdutosPage } from './compra-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraProdutosPageRoutingModule
  ],
  declarations: [CompraProdutosPage]
})
export class CompraProdutosPageModule {}
