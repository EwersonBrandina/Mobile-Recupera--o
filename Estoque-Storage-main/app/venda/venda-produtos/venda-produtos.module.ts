import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendaProdutosPageRoutingModule } from './venda-produtos-routing.module';

import { VendaProdutosPage } from './venda-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendaProdutosPageRoutingModule
  ],
  declarations: [VendaProdutosPage]
})
export class VendaProdutosPageModule {}
