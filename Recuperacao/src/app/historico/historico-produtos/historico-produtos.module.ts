import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoProdutosPageRoutingModule } from './historico-produtos-routing.module';

import { HistoricoProdutosPage } from './historico-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoProdutosPageRoutingModule
  ],
  declarations: [HistoricoProdutosPage]
})
export class HistoricoProdutosPageModule {}
