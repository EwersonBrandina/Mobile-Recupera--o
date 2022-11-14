import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendaProdutosPage } from './venda-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: VendaProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendaProdutosPageRoutingModule {}
